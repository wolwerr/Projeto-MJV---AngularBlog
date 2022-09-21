import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coment } from '../../models/Coment';
import { ComentService } from '../../service/Coment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-coment-page',
  templateUrl: './create-coment-page.component.html',
  styleUrls: ['./create-coment-page.component.css']
})
export class CreateComentPageComponent implements OnInit {

  coments: Coment = this.comentsService.getDefaultComent();


  comentForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(6)]),
    coment: new UntypedFormControl('', [Validators.required]),
    inclusionDate: new UntypedFormControl(this.coments.inclusionDate),
  });

  constructor(
    private comentsService: ComentService,
    private router: Router,
    private toastr: ToastrService
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
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.router.navigateByUrl('/coments');
  }

}
