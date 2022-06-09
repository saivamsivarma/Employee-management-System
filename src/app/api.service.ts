import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  createOrganizationObj:any;
  createOrganizationLoad=false
  createOrganizationResult:any;
  organization_id:any;

  adminSignUpObj:any;
  adminSignUpLoad =false;
  adminDetails:any;

  loginObj:any;
  loginLoad=false;
  loginResult:any;

  getDepartmentLoad=true;
  getDepartmentResult:any;

  getEmployeeLoad=false;
  getEmployeeResult:any;

  deleteEmployeeLoad=false;
  deleteEmployeeId:any;
  deleteEmployeeMessage:any;

  createEmployeeObj:any;
  createEmployeeLoad=false;
  createEmployeeResult:any;



  updateEmployeeLoad=false;
  updateEmployeeId:any;
  updateEmployeeData:any;
  updateEmployeeResult:any;

  createDepartmentLoad=false;
  createDepartmentObj:any;
  createDepartmentResult:any;

  dept_id:any;

  getDepartmentDetailLoad=false;
  getDepartmentDetailResult:any;

  getAllEmployeeLoad=false;
  allEmployees:any;

  getOrganizationLoad=false;
  getOrganizationDetails:any;
  


  constructor(public http:HttpClient, public router:Router) { }

  async createOrganization(){
    this.createOrganizationLoad=true;
    await this.http.post(environment.api_host+'/Organization/',this.createOrganizationObj).subscribe(res=>{
      this.createOrganizationResult = JSON.parse(JSON.stringify(res));
      localStorage.setItem("organization_id",this.createOrganizationResult._id)
      console.log(this.organization_id);
      this.router.navigate(['register']);
      this.createOrganizationLoad=false;
    },err=>{
      window.alert(err.error.message)
    })
  }

  async getOrgDetails(){
    this.getOrganizationLoad=true;
    this.organization_id = localStorage.getItem("organization_id")
    await this.http.get(environment.api_host+`/Organization/${this.organization_id}`).subscribe(res=>{
      this.getOrganizationDetails = JSON.parse(JSON.stringify(res));
      console.log(this.getOrganizationDetails);
      this.getOrganizationLoad=false;
    },err=>{
      console.log(err.error)
    })
  }

  async adminSignup(){
    this.adminSignUpLoad=true;
    this.adminSignUpObj.Organization_id = localStorage.getItem("organization_id");
    await this.http.post(environment.api_host+'/admin/',this.adminSignUpObj).subscribe(res=>{
      this.adminDetails = JSON.parse(JSON.stringify(res));
      console.log(this.adminDetails);
      this.router.navigate(['dashboard']);
      this.adminSignUpLoad=false;
    },err=>{
      console.log(err.error);
    })
  }

  async login(){
    this.loginLoad=true;
    await this.http.post(environment.api_host+'/admin/login',this.loginObj).subscribe(res=>{
      this.loginResult=JSON.parse(JSON.stringify(res));
      localStorage.setItem("organization_id",this.loginResult.organization_id)
      console.log(this.loginResult);
      this.router.navigate(['dashboard']);
      this.loginLoad=false;
    },err=>{
      console.log(err.error.message)
    })
  }

  async getEmployees(id:any){
    this.getEmployeeLoad=true;
    await this.http.get(environment.api_host+`/Employees/dept_employee/${id}`).subscribe(res=>{
      this.getEmployeeResult=JSON.parse(JSON.stringify(res));
      console.log(this.getEmployeeResult)
      this.getEmployeeLoad=false;
    },err=>{
      console.log(err.error);
    })
  }

  async getDepartment(){
    this.getDepartmentLoad=true;
    this.organization_id = localStorage.getItem("organization_id");
    await this.http.get(environment.api_host+`/Department/${this.organization_id}`).subscribe(res=>{
      this.getDepartmentResult=JSON.parse(JSON.stringify(res));
      console.log(this.getDepartmentResult);
      this.getDepartmentLoad=false;
    },err=>{
      console.log(err.error);
    })
  }

  async getDepartmentDetails(id:any){
    this.getDepartmentDetailLoad = true;
   await this.http.get(environment.api_host+`/Department/details/${id}`).subscribe(res=>{
      this.getDepartmentDetailResult=JSON.parse(JSON.stringify(res));
      console.log(this.getDepartmentDetailResult);
      this.getDepartmentDetailLoad=false;
    },err=>{
      console.log(err.error);
    })
  }

  async deleteEmployee(){
    this.deleteEmployeeLoad=true;
    this.organization_id = localStorage.getItem("organization_id");
    await this.http.delete(environment.api_host+`/Employees/${this.deleteEmployeeId}/${this.organization_id}`).subscribe(res=>{
      this.deleteEmployeeMessage=res;
      console.log(res);
      this.deleteEmployeeLoad=false;
    })
  }

  async createEmployee(){
    this.createEmployeeLoad=true;
    this.createEmployeeObj.Org_id = localStorage.getItem("organization_id");
    console.log(this.createEmployeeObj);
    await  this.http.post(environment.api_host+`/Employees/${this.createEmployeeObj.Org_id}`,this.createEmployeeObj).subscribe(res=>{
      this.createEmployeeResult= JSON.parse(JSON.stringify(res))
      console.log(this.createEmployeeResult);
      this.createEmployeeLoad=false;
    },err=>{
      console.log(err.error.message);
    })
  }

  async createDepartment(){
    this.createDepartmentLoad=true;
    this.createDepartmentObj.Organization_id=localStorage.getItem("organization_id");
    await this.http.post(environment.api_host+'/Department',this.createDepartmentObj).subscribe(res=>{
      this.createDepartmentResult=JSON.parse(JSON.stringify(res));
      console.log(this.createDepartmentResult);
      this.createDepartmentLoad=false;
    },err=>{
      console.log(err.error);
    })
  }



  async updateEmployee(){
    this.updateEmployeeLoad=true;
    console.log(this.updateEmployeeData)
    await this.http.patch(environment.api_host+`/Employees/${this.updateEmployeeId}`,this.updateEmployeeData).subscribe(res=>{
      this.updateEmployeeResult=JSON.parse(JSON.stringify(res));
      this.updateEmployeeLoad=false;
    })
  }

  async getAllEmployees(){
    this.getAllEmployeeLoad=true;
    this.organization_id = localStorage.getItem("organization_id");
    await this.http.get(environment.api_host+`/Employees/${this.organization_id}`).subscribe(res=>{
      this.allEmployees=JSON.parse(JSON.stringify(res));
      console.log(this.allEmployees);
      this.getAllEmployeeLoad=false;
    },err=>{
      console.log(err.error);
    })
  }

  async logout(){
    this.router.navigate(['login']);
    localStorage.removeItem("organization_id");
  }
}
