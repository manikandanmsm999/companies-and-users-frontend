import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';
import { Coordinates } from '../Coordinates';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {
  coord:Coordinates=new Coordinates(0,0);
  company:Company=new Company("","","",this.coord);
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  lat:string="";
  lon:string="";
  checkNaN:boolean=false;

  constructor(private companyService:CompaniesServiceService){}

  updateCompany(){
    if(true){
      this.company.coordinates.latitude=+(this.lat);
      this.company.coordinates.longitude=+(this.lon);
      if(this.company.coordinates.latitude && this.company.coordinates.longitude && this.company.coordinates.latitude>=0 && this.company.coordinates.longitude>=0){
        this.checkNaN=false;
        this.companyService.updateCompany(this.company).subscribe(
          (data:any)=>{
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
      else{
        this.checkNaN=true;
      }
    }
  }
}
