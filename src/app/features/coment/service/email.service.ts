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
    const emailApiBaseUrl = this.envService.getBaseUrlEmail().replace(/\/+$/, '');
    const fullUrl = `${emailApiBaseUrl}/sending-email`;
    console.log('Enviando email para URL:', fullUrl);
    console.log('Payload:', email);
    return this.http.post<unknown>(fullUrl, email);
  }

}
