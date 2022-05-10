import { Component, OnInit } from '@angular/core';
import { Coment } from '../../models/Coment';
import { ActivatedRoute } from '@angular/router';
import { ComentService } from '../../service/Coment.service';

@Component({
  selector: 'app-coment-details-page',
  templateUrl: './coment-details-page.component.html',
  styleUrls: ['./coment-details-page.component.css']
})
export class ComentDetailsPageComponent implements OnInit {

  coment?: Coment;

  constructor(
    private comentService: ComentService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.comentService.getComentById(params.id).subscribe(() => {
        this.coment
      });
    });
  }

}
