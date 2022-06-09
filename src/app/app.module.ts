import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroComponent,
    RegisterComponent,
    OrganizationRegisterComponent,
    DashboardComponent,
    CreateEmployeeComponent,
    DeptDetailsComponent,
    DepartmentsComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
