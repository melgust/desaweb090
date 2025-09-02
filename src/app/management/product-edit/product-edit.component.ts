import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product} from '../../models/product';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import swal from 'sweetalert';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
     CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
private ProductService = inject(ProductService);
  private dialogRef = inject(MatDialogRef<ProductEditComponent>);
  private fb = inject(FormBuilder);
  productForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.data) this.productForm.patchValue(this.data);
  }

  onSubmit() {
    const val = this.productForm.value as Product;
    swal({
      title: "Seguro?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "info",
      dangerMode: false,
    })
      .then((willDelete) => {
        if (willDelete) {
          if (this.data?.id) {
            this.ProductService.update(this.data.id, val).subscribe(() => this.dialogRef.close(true));
          } else {
            this.ProductService.add(val).subscribe(() => this.dialogRef.close(true));
          }
        }
      });
  }
}
