import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api:ApiService) { }

  Email:any;
  Password:any;

  ngOnInit(): void {
  }

  login(){
    this.api.loginObj={};
    this.api.loginObj.Email=this.Email;
    this.api.loginObj.Password=this.Password;
    this.api.login();
  }
}
