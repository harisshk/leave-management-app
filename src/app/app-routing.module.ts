import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './auth/authAdmin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { AdminHomeComponent } from './dashboard/home/admin-home/admin-home.component';
import { HomeComponent } from './dashboard/home/home.component';
import { UserHomeComponent } from './dashboard/home/user-home/user-home.component';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'home',component:HomeComponent,children:[
      {path:'admin-home',component:AdminHomeComponent,canActivate:[AdminAuthGuard]},
      {path:'user-home',component:UserHomeComponent}
    ]},
    {path:'employee',component:EmployeeComponent,canActivate:[AdminAuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
