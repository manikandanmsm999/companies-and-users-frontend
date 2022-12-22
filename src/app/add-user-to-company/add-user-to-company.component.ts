import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { CompanyAndUser } from '../CompanyAndUser';

@Component({
  selector: 'app-add-user-to-company',
  templateUrl: './add-user-to-company.component.html',
  styleUrls: ['./add-user-to-company.component.css']
})
export class AddUserToCompanyComponent {

  companyAndUser:CompanyAndUser=new CompanyAndUser("","");
  added:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";

  constructor(private companyService:CompaniesServiceService){}

  addUserToCompanyCompany(){
    this.companyService.addUserToCompany(this.companyAndUser).subscribe(
      (data:any)=>
      {
        this.succMsg=data.message;
        this.onSearch=true;
        this.added=true;
      },
      (err)=>{
        this.errMsg=err.error.message;
        this.onSearch=true;
        this.added=false;
      }
    )
  }
}
