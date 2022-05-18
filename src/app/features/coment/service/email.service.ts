import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:8082/user';



enviarEmail(email: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, email);
  }

}
