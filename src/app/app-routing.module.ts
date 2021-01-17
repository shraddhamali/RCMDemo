import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayPdfComponent } from './display-pdf/display-pdf.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageModelComponent } from './page-model/page-model.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'display_pdf', component: DisplayPdfComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
