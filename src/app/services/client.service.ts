import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
   private apiUrl = 'http://localhost:5062/api/client';
 
   constructor(private http: HttpClient) {}
 
   getAll(): Observable<Client[]> {
     return this.http.get<Client[]>(this.apiUrl);
   }
 
   add(emp: Client): Observable<Client> {
     return this.http.post<Client>(this.apiUrl, emp);
   }
 
   update(id: number, emp: Client): Observable<Client> {
     return this.http.put<Client>(`${this.apiUrl}/${id}`, emp);
   }
 
   delete(id: number): Observable<any> {
     return this.http.delete(`${this.apiUrl}/${id}`);
   }
 
}
