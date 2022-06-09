import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public api:ApiService) { }
  Name:any;
  Email:any;
  Password:any;
  ischeck:any;

  ngOnInit(): void {
  }

  signUp(){
    this.api.adminSignUpObj={};
    this.api.adminSignUpObj.Name=this.Name;
    this.api.adminSignUpObj.Email =  this.Email;
    this.api.adminSignUpObj.Password = this.Password;
    this.api.adminSignup();
  }

}
