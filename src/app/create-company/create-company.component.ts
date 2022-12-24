import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';
import { Coordinates } from '../Coordinates';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  coord:Coordinates=new Coordinates(14.0048,77.9110);
  company:Company=new Company("1","","",this.coord);
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  addressStatus:boolean =false;

  constructor(private companyService:CompaniesServiceService, private mapService:MapServiceService){}

  createCompany(){
    this.mapService.getCoordinates(this.company.companyAddress).subscribe(
      (map:any)=>{
        if(map.address!="none"){
          this.addressStatus=false;
          this.company.coordinates.latitude=map.coordinates.latitude;
          this.company.coordinates.longitude=map.coordinates.longitude;
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
          this.addressStatus=true;
          this.onSearch=false;
          this.success=false;
        }
      }
    )
  }
}
