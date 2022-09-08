import { Component, Input, OnInit } from '@angular/core';
import { Coment } from '../../models/Coment';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentService } from '../../service/Coment.service';
import { AuthService } from 'src/app/features/login/pages/login-page/auth.service';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coment-details-page',
  templateUrl: './coment-details-page.component.html',
  styleUrls: ['./coment-details-page.component.css']
})
export class ComentDetailsPageComponent implements OnInit {

  // coment?: Coment;

  // @Input()
  // coment?: Coment;

  @Input()
  card: boolean = true;

  mostrarBotoes: boolean = false;


  constructor(
    private comentService: ComentService,
    private activedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.comentService.getComentById(params.id).subscribe((coment) => {
        this.coment = coment;
      });
    });
    // this.authService.mostrarBotoesEmitter.subscribe(
    //   mostrar => this.mostrarBotoes = mostrar
    // );
  }

  remove() {
    if (this.coment && this.coment.id) this.comentService.removeComent(this.coment.id)
    .subscribe((result) => {
      this.toastr.success('Comment deleted', 'Success');
      this.router.navigateByUrl('/coment');
    });
  }

  coment: Coment = this.comentService.getDefaultComent();


  editForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    message: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    inclusionDate: new UntypedFormControl(this.coment.inclusionDate)
  });

  onSubmit() {
    const formValue = this.editForm.value;
      this.coment.name = formValue.name;
      this.coment.message = formValue.message;
      this.coment.email = formValue.email;
      this.coment.password = formValue.password;
      this.comentService.updateComent(this.coment.id, this.coment).subscribe((result) => {
        this.toastr.success('Comment updated', 'Success');
        this.router.navigateByUrl('/coment');
      });
    }
}

