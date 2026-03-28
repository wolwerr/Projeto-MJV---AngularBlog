import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/Email';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../../../services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private envService: EnvironmentService) { }

  enviarEmail(email: Email): Observable<unknown> {
    return this.http.post<unknown>(`${this.envService.getBaseUrlEmail()}`, email);
  }

}
