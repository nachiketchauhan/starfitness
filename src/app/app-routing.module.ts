import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembershipComponent } from './membership/membership.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "membership", component: MembershipComponent},
  {path:"dashboard", component: DashboardComponent},
  { path: "login", component: LoginComponent },
  { path: "*", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
