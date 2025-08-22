import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import swal from 'sweetalert';
import { Item } from '../../models/item';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-prueba',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatButtonModule, MatDialogModule, MatTableModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css',
})
export class PruebaComponent {
    form = this.fb.group({
    message: ['', [Validators.required, Validators.minLength(5)]],
  });
  items: Item[] = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService) {
      let item = new Item();
      item.id = 1;
      item.description = 'Curso para aprender a analizar los requerimientos';
      item.name = 'Analisis de Sistemas II';
      this.items.push(item);
      item = new Item();
      item.id = 1;
      item.description = 'Curso para aprender sobre micro controladores';
      item.name = 'Arquitectura de Computadores';
      this.items.push(item);
    }

  onSubmit() {
    if (this.form.valid) {
      let controls = this.form.controls;
      let message = controls.message;
      this.messageService.sendMessage("mensaje").subscribe({
        next: (res) => {
          console.log('✅ Message sent:', res);
          this.form.reset();
        },
        error: (err) => console.error('❌ Error sending message:', err),
      });
      
    }
  }

  showMessage() {
    swal("Good job!", "You clicked the button!", "success");
  }

  displayedColumns = ['id', 'name', 'description', 'actions'];

  openDialog(item?: Item) {
    if (item) {
      swal("Good job!", "You clicked the edit button!", "info");
    } else {
      swal("Good job!", "You clicked the add button!", "success");
    }
  }

  delete(item: Item) {
    swal("Good job!", "You clicked the delete button!", "warning");
  }

}
