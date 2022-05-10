import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComentService } from '../../../../features/coment/service/Coment.service';
import {LoginService } from '../../../../features/coment/service/login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  email?: string;
  password?: string;

  constructor(
    private comentService: ComentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    // const coment = this.comentService.getComentByEmailAndPassword(this.email, this.password);
    // if (!coment) {
    //   this.error = true;

    // } else {
    //   // delete coment.password;

    //   sessionStorage.setItem('coment', JSON.stringify(coment));

    //   this.router.navigateByUrl('coment');
    // }

  }

}
