import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/coment/pages/home/home.component';
import { ComentComponent } from './features/coment/pages/coment-page/coment-page.component';
import { ContatoComponent } from './features/coment/pages/contato/contato.component';
import { LoginPageComponent } from '../app/features/login/pages/login-page/login-page.component'
import { ComentDetailsPageComponent } from './features/coment/pages/coment-details-page/coment-details-page.component';
import { CreateComentPageComponent } from './features/coment/pages/create-coment-page/create-coment-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'coment', component: ComentComponent},
    {path: 'coment-details/:id', component: ComentDetailsPageComponent},
    {path: 'create-coment', component: CreateComentPageComponent, canActivate: [AuthGuard] },
    {path: 'contato', component: ContatoComponent},
    {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
