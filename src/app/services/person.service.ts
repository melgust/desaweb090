import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:5062/api/person';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  add(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  update(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
