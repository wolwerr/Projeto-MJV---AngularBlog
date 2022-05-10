import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coment } from '../models/Coment';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

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

  constructor(private httpClient: HttpClient) { }

  getDefaultComent(): Coment {
    const dateToday = moment().format('YYYY/MM/DD');
    return{
      // id: this.generateNextId(),
      name:'',
      email: '',
      password: '',
      message:'',
      inclusionDate: dateToday,
      loggedIn: false
    }
  }
  generateNextId(): number {
    throw new Error('Method not implemented.');
  }

  getComent() {
    return this.httpClient.get<Array<Coment>>(environment.baseUrlBackendGet, this.options);
  }

  getComentByEmailAndPassword(body: { email: string, password: string}) {
    return this.httpClient.get<Coment>(`${environment.baseUrlBackendLogin}/`);
  }

  getComentById(id: number) {
    return this.httpClient.get<Coment>(`${environment.baseUrlBackendId}${id}`, this.options);
  }

  getComentByName(name: string) {
    return this.coment.find((coment) => coment.name === name);
  }

  getComentsByFilterName(name: string) {
    return this.coment.filter((coment) => coment.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getComentsByFilterId(id: number) {
    const coment = this.getComentById(Number(id));
    if(!coment) {
      return [];
    }
    return [coment];
  }

  createComent(coment: Coment) {
    return this.httpClient.post(`${environment.baseUrlBackendPost}`, coment);
  }

  removeComent(id: number) {
    return this.httpClient.delete<any>(`${environment.baseUrlBackendId}/remove/${id}`, this.options);
  }

  updateComent(id: number, body: { email: string, name: string }) {
    return this.httpClient.put<any>(`${environment.baseUrlBackendId}/update/${id}`, body, this.options);
  }
}
