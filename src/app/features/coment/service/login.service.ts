import { Injectable } from '@angular/core';
import { ComentService } from '../service/Coment.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

comentService: ComentService;

  constructor() { }

  authenticate(email: string, password: string){
    // return this.comentService.getComentByEmailAndPassword(email, password);
  }
}
