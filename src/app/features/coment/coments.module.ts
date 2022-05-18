import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentListComponent } from './components/coment-list/coment-list.component';
import { ComentComponent } from './pages/coment-page/coment-page.component';
import { ComentPageComponent } from './components/coment/coment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComentDetailsPageComponent } from './pages/coment-details-page/coment-details-page.component';
import { RouterModule } from '@angular/router';
import { CreateComentPageComponent } from './pages/create-coment-page/create-coment-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from '../login/login.module';




@NgModule({
  declarations: [
    ComentListComponent,
    ComentComponent,
    ComentPageComponent,
    ComentDetailsPageComponent,
    CreateComentPageComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule,
    LoginModule
  ],

  exports: [RouterModule]


})
export class ComentsModule { }
