import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { Email } from '../../models/Email';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  email: Email = new Email;

  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });


  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    const formValue = this.emailForm.value;
      this.email.name = formValue.name;
      this.email.email = formValue.email;
      this.email.phone = formValue.phone;
      this.email.message = formValue.message;
      this.emailService.enviarEmail(this.email).subscribe((result) => {
        alert('Email sented');
        // window.location.reload();
      });
    }
}
