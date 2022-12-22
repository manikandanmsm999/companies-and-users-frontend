import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent {
  companyId!:string;
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";

  constructor(private companyService:CompaniesServiceService){}

  deleteCompanyById(id:string){
    this.companyService.deleteCompany(id).subscribe(
      (data:any)=>
      {
        this.succMsg=data.message;
        this.onSearch=true;
        this.success=true;
      },
      (err)=>{
        this.errMsg=err.error.message;
        this.onSearch=true;
        this.success=false;
      }
    )
  }
}
