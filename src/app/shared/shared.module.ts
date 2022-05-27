import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const components = [
  NavbarComponent,
  FooterComponent
];

const pipes = [CpfPipe];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ...components,
    ...pipes,
  ]
})
export class SharedModule { }
