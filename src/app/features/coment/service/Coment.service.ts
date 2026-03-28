import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coment } from '../models/Coment';
import * as moment from 'moment';
import { EnvironmentService } from '../../../services/environment.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ComentService {

  coment: Array<Coment> = [];

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private httpClient: HttpClient, private envService: EnvironmentService) { }

  getDefaultComent(): Coment {
    const dateToday: string = moment().format('YYYY/MM/DD');
    return {
      name: '',
      email: '',
      password: '',
      message: '',
      inclusionDate: dateToday,
      loggedIn: false
    };
  }
  generateNextId(): number {
    throw new Error('Method not implemented.');
  }

  getComent(): Observable<Array<Coment>> {
    return this.httpClient.get<Array<Coment>>(this.envService.getBaseUrlBackend(), this.options);
  }

  getComentByEmailAndPassword(email: string, password: string): Observable<Coment> {
    return this.httpClient.get<Coment>(`${this.envService.getBaseUrlBackend()}/${email}/${password}`);
  }

  getComentById(id: number): Observable<Coment> {
    return this.httpClient.get<Coment>(`${this.envService.getBaseUrlBackend()}/${id}`, this.options);
  }

  getComentsByFilterName(name: string): Array<Coment> {
    return this.coment.filter((coment) => coment.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getComentsByFilterId(id: number): Observable<Array<Coment>> {
    return this.getComentById(Number(id)).pipe(
      map((coment) => (coment ? [coment] : []))
    );
  }

  createComent(coment: Coment): Observable<Coment> {
    return this.httpClient.post<Coment>(`${this.envService.getBaseUrlBackend()}`, coment);
  }

  removeComent(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.envService.getBaseUrlBackend()}/remove/${id}`, this.options);
  }

  updateComent(id: number, coment: Coment): Observable<any> {
    return this.httpClient.put<any>(`${this.envService.getBaseUrlBackend()}/update/${id}`, coment, this.options);
  }
}
