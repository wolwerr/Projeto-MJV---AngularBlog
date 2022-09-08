import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coment } from 'src/app/features/coment/models/Coment';
import { ComentService } from '../../../../features/coment/service/Coment.service';
import { LoginService } from '../../../coment/service/login.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;
  coment: Coment;
  email?: string
  password?: string
  estaCarregando: boolean;
  isLogado: boolean = false;


  constructor( private loginService: LoginService, private router: Router, private comentService: ComentService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  });


  authenticate() {
    this.estaCarregando = true;
    const formValue = this.loginForm.value
    this.loginService.authenticate(
      formValue.email,
      formValue.password
      ).pipe(
        finalize(() => this.estaCarregando = false)
      )
      .subscribe((comment) =>{
        if (!comment){
          return(this.error = true);

        }
        localStorage.setItem('isLogado', JSON.stringify(this.isLogado = true));
        localStorage.setItem('coment', JSON.stringify(comment));
        return this.router.navigateByUrl('/coment');
      })

  }

}
