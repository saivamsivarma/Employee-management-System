import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
    this.api.getOrgDetails();
    this.api.getDepartment();
    this.api.getAllEmployees();
  }

  logout(){
    this.api.logout();
  }

}
