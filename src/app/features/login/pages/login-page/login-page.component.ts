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

  constructor( private authService: AuthService, private router: Router, private comentService: ComentService) { }

  ngOnInit(): void {
  }


  authenticate() {
    const coment = this.comentService.getComentByEmailAndPassword(this.email, this.password);
    if (!coment) {
      this.error = true;
    } else {
      // delete coment.password;

      sessionStorage.setItem('coment', JSON.stringify(coment));

      this.router.navigateByUrl('coment');
    }

  }

}
