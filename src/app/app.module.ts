import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentsModule } from './features/coment/coments.module';
import { LoginModule } from './features/login/login.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule} from '@angular/router';
import { AuthService } from './features/login/pages/login-page/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LoginModule,
    ComentsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],

  exports: [RouterModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
