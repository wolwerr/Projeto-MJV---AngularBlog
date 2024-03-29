import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { Email } from '../../models/Email';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  email: Email = new Email;

  emailForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    phone: new UntypedFormControl('', [Validators.required, Validators.maxLength(20)]),
    message: new UntypedFormControl('', [Validators.required]),
  });


  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    const formValue = this.emailForm.value;
      this.email.ownerRef = formValue.name;
      this.email.emailTo = formValue.email;
      this.email.phone = formValue.phone;
      this.email.text = formValue.message;
      this.emailService.enviarEmail(this.email).subscribe((result) => {
        alert('Email sented');
        window.location.reload();
      });
    }
}
