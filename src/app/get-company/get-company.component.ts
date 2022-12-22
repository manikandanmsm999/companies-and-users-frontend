import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent {
  company!:Company;
  companyId!:string;
  hasData:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";

  constructor(private companyService:CompaniesServiceService){}

  getCompanyById(id:string){
    this.companyService.getCompanyById(id).subscribe(
      (company:Company)=>
      {
        this.company=company;
        if(this.company==null || this.company==undefined){
          this.hasData=false;
          this.onSearch=true;
        }else{
          this.hasData=true;
          this.onSearch=true;
        }
      },
      (err)=>{
        this.errMsg=err.error.message;
        this.onSearch=true;
        this.hasData=false;
      }
    )
  }
}
