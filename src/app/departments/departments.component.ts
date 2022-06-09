import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(public router:Router, public api:ApiService) { }

  interval:any;
  emp_id:any;
  state:any;
  dept_name:any;
  ngOnInit(): void {
    this.api.getDepartment();
  }

  createDepartment(){
    this.api.createDepartmentObj={};
    this.api.createDepartmentObj.dept_name=this.dept_name;
    this.api.createDepartment();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  
  async deptDetails(id:any){
    this.router.navigate(['/dept',id])
  }

}
