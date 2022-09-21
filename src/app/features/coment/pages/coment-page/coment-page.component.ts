import { Component, OnInit } from '@angular/core';
import { ComentService } from '../../service/Coment.service';
import { Coment } from '../../models/Coment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coment-page',
  templateUrl: './coment-page.component.html',
  styleUrls: ['./coment-page.component.css']
})
export class ComentComponent implements OnInit {

  filteredComents: Array<Coment> = [];

  coment: Coment = this.comentService.getDefaultComent();
  comentForm: FormGroup;

  constructor(
    private comentService: ComentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  listComent: Coment[];

  ngOnInit() {
    this.findPosts();
    this.comentForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      inclusionDate: [Date.now, Validators.required],
    });
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
        this.toastr.success('Comment deleted', 'Success');
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
