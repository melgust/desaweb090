import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, MatCardModule, 
    MatSlideToggleModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Site 1';
  form = this.fb.group({
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService) {
      
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

}
