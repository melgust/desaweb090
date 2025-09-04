import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { text } from 'node:stream/consumers';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   loginData = {
    username: '',
    password: ''
  };

   constructor(private http: HttpClient, private serv: LoginService) { }

  // Método que se ejecuta al enviar el formulario
onSubmit(): void {
    // Verificamos que los campos no estén vacíos
    if (!this.loginData.username || !this.loginData.password) {
      console.error('El usuario y la contraseña son requeridos.');
      return;
    }

    // Enviamos los datos a la API de .NET usando una petición POST
    this.serv.login(this.loginData).subscribe((info: any) => {
      // console.log(info);
      var tmp = info;

      // Replace the condition below with the appropriate value to compare
      if (tmp.estado == false) {
          confirm(tmp.message)
      }else{
          confirm(tmp.message)
      }
    });
  }

}
