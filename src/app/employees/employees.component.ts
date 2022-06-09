import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
    this.api.getAllEmployees();
  }
  async deptDetails(id:any){
    this.router.navigate(['/dept',id])
  }

}
