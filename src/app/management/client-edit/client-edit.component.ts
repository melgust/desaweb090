import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Client } from '../../models/client';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import swal from 'sweetalert';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [   CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent],
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent {
private clientService = inject(ClientService);
  private dialogRef = inject(MatDialogRef<ClientEditComponent>);
  private fb = inject(FormBuilder);
  clientForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Client) {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nit: ['', Validators.required],

    });
  }

  ngOnInit() {
    if (this.data) this.clientForm.patchValue(this.data);
  }

  onSubmit() {
    const val = this.clientForm.value as Client;
    swal({
      title: "Seguro?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "info",
      dangerMode: false,
    })
      .then((willDelete) => {
        if (willDelete) {
          if (this.data?.id) {
            this.clientService.update(this.data.id, val).subscribe(() => this.dialogRef.close(true));
          } else {
            this.clientService.add(val).subscribe(() => this.dialogRef.close(true));
          }
        }
      });
  }
}
