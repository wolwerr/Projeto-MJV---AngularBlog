import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coment } from '../models/Coment';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

    // const data = { email,
    //               password:''
    //             };
  }
  generateNextId(): number {
    throw new Error('Method not implemented.');
  }

  getComent() {
    return this.httpClient.get<Array<Coment>>(environment.baseUrlBackend, this.options);
  }

  getComentByEmailAndPassword(email: string, password: string ){
    return this.httpClient.post('http://localhost:8080/comment/login', (coment) => coment.email === email && coment.password === password);
  }

  getComentById(id) {
    return this.httpClient.get<Coment>(`${environment.baseUrlBackend}/${id}`, this.options);
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
    return this.httpClient.post(`${environment.baseUrlBackend}`, coment);
  }

  removeComent(id: number) {
    return this.httpClient.delete<any>(`${environment.baseUrlBackend}/remove/${id}`, this.options);
  }

  updateComent(id: number, coment: Coment) {
    return this.httpClient.put<any>(`${environment.baseUrlBackend}/update/${id}`, coment, this.options);
  }
}
