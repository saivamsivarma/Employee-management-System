import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {OrganizationRegisterComponent} from './organization-register/organization-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'Intro', pathMatch: 'full' },
  {path:'Intro',component:IntroComponent},
  {path:'login',component:LoginComponent},
  {path:'organizationRegister',component:OrganizationRegisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'dept/:id', component:DeptDetailsComponent},
  {path:'employees',component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
