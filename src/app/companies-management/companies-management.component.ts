import { Component } from '@angular/core';
import {Router} from'@angular/router';

@Component({
  selector: 'app-companies-management',
  templateUrl: './companies-management.component.html',
  styleUrls: ['./companies-management.component.css']
})
export class CompaniesManagementComponent {
  

  constructor(private router:Router){}

  gotoCompaniesList(){
    this.router.navigate(['/','companyList']);
  }

  gotoGetCompanyById(){
    this.router.navigate(['/','getCompanyById']);
  }

  gotocreateCompany(){
    this.router.navigate(['/','createCompany']);
  }

  gotoAddUserToCompany(){
    this.router.navigate(['/','addUserToCompany']);
  }

  gotoRemoveUserFromCompany(){
    this.router.navigate(['/','removeUserFromCompany']);
  }

  gotoDeleteCompany(){
    this.router.navigate(['/','deleteCompany']);
  }

  gotoUpdateCompany(){
    this.router.navigate(['/','updateCompany'])
  }
  
}
