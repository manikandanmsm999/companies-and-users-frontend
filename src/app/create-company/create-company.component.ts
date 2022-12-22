import { Component } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';
import { Coordinates } from '../Coordinates';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  coord:Coordinates=new Coordinates(0,0);
  company:Company=new Company("1","","",this.coord);
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  lat:string="";
  lon:string="";
  checkNaN:boolean=false;

  constructor(private companyService:CompaniesServiceService){}

  createCompany(){
    if(true){
      this.company.coordinates.latitude=+(this.lat);
      this.company.coordinates.longitude=+(this.lon);
      if(this.company.coordinates.latitude && this.company.coordinates.longitude && this.company.coordinates.latitude>=0 && this.company.coordinates.longitude>=0){
        this.checkNaN=false;
        this.companyService.createCompany(this.company).subscribe(
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
