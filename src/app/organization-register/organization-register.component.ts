import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.css']
})
export class OrganizationRegisterComponent implements OnInit {

  constructor(public api:ApiService) { }

  Organization_name:any;
  Branch_code:any;

  ngOnInit(): void {
  }

  createOrganization(){
    this.api.createOrganizationObj={}
    this.api.createOrganizationObj.Organization_Name = this.Organization_name;
    this.api.createOrganizationObj.Organization_code = this.Branch_code;
    this.api.createOrganizationObj.MembershipType = "Basic"
    this.api.createOrganization();
  }

}
