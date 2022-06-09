import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(public api:ApiService) { }

  formState='personal';

  FirstName:any;
  LastName:any;
  Age:any;
  BirthDate:any;
  Gender:any;

  Education:any;
  Department:any;
  Post:any;

  Contact:any;
  Email:any;
  Address:any;

  SSN:any;
  Job_type:any;
  Salary:any;


  ngOnInit(): void {
  }

  stateChange(state:any){
    this.formState=state;
  }

  createEmployee(){
    this.api.createEmployeeObj={};
    this.api.createEmployeeObj.FirstName=this.FirstName;
    this.api.createEmployeeObj.LastName=this.LastName;
    this.api.createEmployeeObj.Age=this.Age;
    this.api.createEmployeeObj.BirthDate=this.BirthDate;
    this.api.createEmployeeObj.Gender=this.Gender;
    this.api.createEmployeeObj.Education=this.Education;
    this.api.createEmployeeObj.Department=this.Department;
    this.api.createEmployeeObj.Post=this.Post;
    this.api.createEmployeeObj.Contact=this.Contact;
    this.api.createEmployeeObj.Email=this.Email;
    this.api.createEmployeeObj.Address=this.Address;
    this.api.createEmployeeObj.SSN=this.SSN;
    this.api.createEmployeeObj.Job_type=this.Job_type;
    this.api.createEmployeeObj.Salary=this.Salary;
    this.api.createEmployee();
  }

}
