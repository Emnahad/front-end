import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule], // Use ReactiveFormsModule here
  exports: [RouterModule]
})
export class AppRoutingModule { }
