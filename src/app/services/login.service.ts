import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiUrl = 'http://localhost:5062/api/Auth/login';
    
      constructor(private http: HttpClient) {}
    
      login(body: any) {
        return this.http.post(this.apiUrl, body);
      }
}
