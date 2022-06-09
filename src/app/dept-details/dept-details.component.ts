import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute,public api:ApiService) { }

  employeeDetails = null as any;
  interval:any;
  emp_id:any;
  state:any;
  dept_id:any;
  dept_name:any;
  layout='cards';
  btn: any;

  //create User
  Employee_name='';
  Employee_email='';
  Role='';
  Experience='';
  Gender='';
  Salary='';
  Data_of_join='';
  Contact='';
  JobType='';
  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.api.getEmployees(id);
    this.api.getDepartmentDetails(id);
  }

  stateChange(layout:any){
    this.layout=layout;
  }

  deleteEmployee(id:any,state:any){
    this.emp_id=id;
    this.state=state;
    console.log(this.emp_id)
  }


  createEmployeePopUp(state:any,id:any,name:any){
    this.dept_id=id;
    this.dept_name=name;
    this.state=state;
    console.log(this.dept_name)
  }

  updateEmployeePopup(employee:any,state:any){
    this.state=state;
    this.employeeDetails = employee
  }
  


  delete(){
    this.api.deleteEmployeeId=this.emp_id;
    this.api.deleteEmployee();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 500);
  }

  update(){
    this.api.updateEmployeeId=this.employeeDetails._id;
    this.api.updateEmployeeData=this.employeeDetails;
    this.api.updateEmployee();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 500);
  }
  handleClear(){
    this.Employee_name='';
  this.Employee_email='';
  this.Role='';
  this.Experience='';
  this.Gender='';
  this.Salary='';
  this.Data_of_join='';
  this.Contact='';
  this.JobType='';
  }

  create(){
    this.api.createEmployeeObj={};
    this.api.createEmployeeObj.Employee_name=this.Employee_name;
    this.api.createEmployeeObj.Employee_email=this.Employee_email;
    this.api.createEmployeeObj.Role=this.Role;
    this.api.createEmployeeObj.Experience=this.Experience;
    this.api.createEmployeeObj.Gender=this.Gender;
    this.api.createEmployeeObj.Salary=this.Salary;
    this.api.createEmployeeObj.Data_of_join=this.Data_of_join;
    this.api.createEmployeeObj.Contact=this.Contact;
    this.api.createEmployeeObj.JobType=this.JobType;
    this.api.createEmployeeObj.dept_id=this.dept_id;
    this.api.createEmployeeObj.dept_name=this.dept_name;
    this.api.createEmployee();
    this.handleClear();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 500);

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  

}
