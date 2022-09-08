import { Component, OnInit } from '@angular/core';
import { ComentService } from '../../service/Coment.service';
import { Coment } from '../../models/Coment';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coment-page',
  templateUrl: './coment-page.component.html',
  styleUrls: ['./coment-page.component.css']
})
export class ComentComponent implements OnInit {


  filteredComents: Array<Coment> = [];

  coment: Coment = this.comentService.getDefaultComent();


  comentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    inclusionDate: new FormControl(this.coment.inclusionDate)
  });

  listComent: Coment[];


  constructor(private comentService: ComentService, private router: Router) { }

  ngOnInit(): void {
    this.findPosts(),
    this.comentForm.controls.inclusionDate.disable();

  }

  findPosts() {
    this.comentService.getComent().subscribe((data: Coment[]) => {
      this.listComent = data;
    })
  }

  onSubmit() {
    const formValue = this.comentForm.value;
      this.coment.name = formValue.name;
      this.coment.message = formValue.message;
      this.coment.email = formValue.email;
      this.coment.password = formValue.password;
      this.comentService.createComent(this.coment).subscribe((result) => {
        alert('Coment sented');
        window.location.reload();
      });
    }

      findComentByFilter(event: any, type: 'Name' | 'Id') {
        const value = event.target.value;
        const coments = type === 'Id' ? this.comentService.getComentsByFilterId(value) : this.comentService.getComentsByFilterName(value);
      }

      logado(){
        return localStorage.getItem('isLogado') ? true : false;
      }
}
