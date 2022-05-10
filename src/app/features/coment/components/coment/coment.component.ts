import { Component, Input, OnInit } from '@angular/core';
import { Coment } from '../../models/Coment';
import { ComentService } from '../../service/Coment.service';

@Component({
  selector: 'app-coment-page',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentPageComponent implements OnInit {
  @Input()
  coments: Array<Coment> = [];

  @Input()
  card: boolean = true;

  filteredComents: Array<Coment> = [];

  constructor(private comentService: ComentService) { }

  ngOnInit(): void {
    this.comentService.getComent().subscribe((coments) => {
      this.coments = coments;
      this.filteredComents = this.coments;
    });
  }

  findComentByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const coments = type === 'Id' ? this.comentService.getComentsByFilterId(value) : this.comentService.getComentsByFilterName(value);
  }

}
