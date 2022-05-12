import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Coment } from 'src/app/features/coment/models/Coment';
import { ComentService } from '../../../../features/coment/service/Coment.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  email?: string
  password?: string

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }


  authenticate(){
    console.log(this.email, this.password)
    this.authService.authenticate(this.email, this.password)
  }

}
