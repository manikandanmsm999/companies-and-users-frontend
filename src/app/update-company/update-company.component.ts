import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';
import { Coordinates } from '../Coordinates';
import { LooseCoordinates } from '../LooseCoordinates';
import { LooseObject } from '../LooseObject';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {
  coord:Coordinates=new Coordinates(400,400);
  company:Company=new Company("","","",this.coord);
  sendingObj:LooseObject ={};
  senderCoordinates:LooseCoordinates={};
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  addressStatus:boolean =false;

  constructor(private companyService:CompaniesServiceService, private mapService:MapServiceService){}

  updateCompany(){
    this.sendingObj['companyId']=this.company.companyId;
    if(this.company.companyName==""){
      this.sendingObj['companyName']=null;
    }
    else{
      this.sendingObj['companyName']=this.company.companyName;
    }

    if(this.company.companyAddress==""){
      this.sendingObj['companyAddress']=null;
      this.companyService.updateCompany(this.sendingObj).subscribe(
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
      this.sendingObj['companyAddress']=this.company.companyAddress;
      this.mapService.getCoordinates(this.company.companyAddress).subscribe(
        (map:any)=>{
          if(map.address!="none"){
            this.addressStatus=false;
            this.company.coordinates.latitude=map.coordinates.latitude;
            this.company.coordinates.longitude=map.coordinates.longitude;
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
            this.addressStatus=true;
            this.onSearch=false;
            this.success=false;
          }
        }
      )
    }
  }
}
