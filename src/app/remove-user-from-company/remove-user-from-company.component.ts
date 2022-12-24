import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { CompanyAndUser } from '../CompanyAndUser';

@Component({
  selector: 'app-remove-user-from-company',
  templateUrl: './remove-user-from-company.component.html',
  styleUrls: ['./remove-user-from-company.component.css']
})
export class RemoveUserFromCompanyComponent {
  companyAndUser:CompanyAndUser=new CompanyAndUser("","");
  added:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";

  constructor(private companyService:CompaniesServiceService){}

  removeUserFromCompany(){
    this.companyService.removeUserFromCompany(this.companyAndUser.companyId,this.companyAndUser.userId).subscribe(
      (data:any)=>
      {
        if(data.message=="Mentioned userId is not mapped to the mentioned companyId"){
          this.errMsg=data.message;
          this.onSearch=true;
          this.added=false;
        }
        else{
          this.succMsg=data.message;
          this.onSearch=true;
          this.added=true;
        }
      },
      (err)=>{
        this.errMsg=err.error.message;
        this.onSearch=true;
        this.added=false;
      }
    )
  }
}
