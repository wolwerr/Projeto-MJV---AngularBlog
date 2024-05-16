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

  allComments: Coment[] = []; 
  filteredComments: Coment[] = []; 

  comment: Coment = this.comentService.getDefaultComent();
  commentForm: FormGroup;

  constructor(
    private comentService: ComentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  listComent: Coment[];

  ngOnInit() {
    this.findPosts();
    this.commentForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      inclusionDate: [Date.now, Validators.required],
    });
  }

  findPosts() {
    this.comentService.getComent().subscribe((data: Coment[]) => {
      this.listComent = data;
    })
  }

  onSubmit() {
    const formValue = this.commentForm.value;
      this.comment.name = formValue.name;
      this.comment.message = formValue.message;
      this.comment.email = formValue.email;
      // this.comment.password = formValue.password;
      this.comentService.createComent(this.comment).subscribe((result) => {
        this.toastr.success('Comment deleted', 'Success');
        window.location.reload();
      });
    }

    findComentByFilter(event: any, filterType: string): void {
      const filterValue = event.target.value;
  
      if (filterType === 'Name') {
          // Usando a propriedade 'nome' de Coment.
          this.filteredComments = this.allComments.filter(comment =>
              comment.name.toLowerCase().includes(filterValue.toLowerCase()));
      } else if (filterType === 'Message') {
          // Usando a propriedade 'message' de Coment.
          this.filteredComments = this.allComments.filter(comment => 
              comment.message.toLowerCase().includes(filterValue.toLowerCase()));
      }
    }
  
  
  
  

      logado(){
        return localStorage.getItem('isLogado') ? true : false;
      }
}
