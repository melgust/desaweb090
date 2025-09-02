import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
    private apiUrl = 'http://localhost:5062/api/product';
  
    constructor(private http: HttpClient) {}
  
    getAll(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }
  
    add(emp: Product): Observable<Product> {
      return this.http.post<Product>(this.apiUrl, emp);
    }
  
    update(id: number, emp: Product): Observable<Product> {
      return this.http.put<Product>(`${this.apiUrl}/${id}`, emp);
    }
  
    delete(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  
}
