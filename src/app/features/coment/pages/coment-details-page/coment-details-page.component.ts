import { Component, OnInit } from '@angular/core';
import { Coment } from '../../models/Coment';
import { ActivatedRoute } from '@angular/router';
import { ComentService } from '../../service/Coment.service';
import { AuthService } from 'src/app/features/login/pages/login-page/auth.service';

@Component({
  selector: 'app-coment-details-page',
  templateUrl: './coment-details-page.component.html',
  styleUrls: ['./coment-details-page.component.css']
})
export class ComentDetailsPageComponent implements OnInit {

  coment?: Coment;

  mostrarBotoes: boolean = false;

  constructor(
    private comentService: ComentService,
    private activedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.comentService.getComentById(params.id).subscribe((coment) => {
        this.coment = coment;
      });
    });
    this.authService.mostrarBotoesEmitter.subscribe(
      mostrar => this.mostrarBotoes = mostrar
    );
  }

}
