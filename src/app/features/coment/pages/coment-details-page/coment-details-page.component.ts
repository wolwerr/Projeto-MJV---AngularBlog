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

  coment: Coment;
  editForm: UntypedFormGroup;
  @Input() card: boolean = true;

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
        this.initializeForm();
      });
    });
  }

  initializeForm() {
    this.editForm = new UntypedFormGroup({
      name: new UntypedFormControl(this.coment.name, Validators.required),
      message: new UntypedFormControl(this.coment.message, Validators.required),
      email: new UntypedFormControl(this.coment.email, [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(6)]),
      inclusionDate: new UntypedFormControl({ value: this.coment.inclusionDate, disabled: true })
    });
  }

  remove() {
    if (this.coment && this.coment.id) {
      this.comentService.removeComent(this.coment.id)
        .subscribe(() => {
          this.toastr.success('Comment deleted', 'Success');
          this.router.navigateByUrl('/coment');
        });
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const formValue = this.editForm.value;
      const updatedComent = { ...this.coment, ...formValue };
      this.comentService.updateComent(this.coment.id, updatedComent).subscribe(() => {
        this.toastr.success('Comment updated', 'Success');
        this.router.navigateByUrl('/coment');
      });
    }
  }
}