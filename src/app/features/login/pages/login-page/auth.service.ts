import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarBotoesEmitter = new EventEmitter<boolean>();

  email?: string
  password?: string

  constructor(private router: Router) { }

  // authenticate(email, password){
  //   if(email === 'ricardo@dtmm.com.br' && password === '123456'){
  //     this.usuarioAutenticado = true;
  //     this.mostrarBotoesEmitter.emit(true);
  //     this.router.navigate(['/coment']);
  //   }else{
  //     this.usuarioAutenticado = false;
  //     this.mostrarBotoesEmitter.emit(false);
  //   }
  // }
}
