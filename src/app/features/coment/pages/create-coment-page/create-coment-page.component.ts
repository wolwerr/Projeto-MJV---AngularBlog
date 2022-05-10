import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coment } from '../../models/Coment';
import { ComentService } from '../../service/Coment.service';

@Component({
  selector: 'app-create-coment-page',
  templateUrl: './create-coment-page.component.html',
  styleUrls: ['./create-coment-page.component.scss']
})
export class CreateComentPageComponent implements OnInit {

  coments: Coment = this.comentsService.getDefaultComent();


  comentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    coment: new FormControl('', [Validators.required]),
    inclusionDate: new FormControl(this.coments.inclusionDate),
  });

  constructor(
    private comentsService: ComentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.comentForm.controls.inclusionDate.disable();
  }

  onSubmit() {
    const formValue = this.comentForm.value;
    this.coments.name = formValue.name;
    this.coments.email = formValue.email;
    this.coments.password = formValue.password;
    this.coments.message = formValue.message;
    this.comentsService.createComent(this.coments);
    alert('Comentário adicionado com sucesso!');
    this.router.navigateByUrl('/coments');
  }

}
