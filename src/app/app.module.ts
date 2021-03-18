import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule ,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminHomeComponent } from './dashboard/home/admin-home/admin-home.component';
import { UserHomeComponent } from './dashboard/home/user-home/user-home.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AdminAuthGuard } from './auth/authAdmin.guard';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import {MatTabsModule} from '@angular/material/tabs';
import { EmployeeListComponent } from './dashboard/employee/employee-list/employee-list.component';
import { HttpInterceptorService } from './auth/http-interceptor.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminHomeComponent,
    UserHomeComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,FormsModule,RouterModule,MatInputModule,MatSidenavModule,MatTableModule,MatRadioModule,
    MatIconModule,ReactiveFormsModule,FormsModule,BrowserAnimationsModule,MatSelectModule,MatDatepickerModule,HttpClientModule,
    MatToolbarModule,MatTabsModule,MatPaginatorModule,MatSortModule
  ],
  providers: [AuthService,AuthGuard,AdminAuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
