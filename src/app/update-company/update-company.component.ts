import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';
import { Coordinates } from '../Coordinates';
import { LooseCoordinates } from '../LooseCoordinates';
import { LooseObject } from '../LooseObject';

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
  map:boolean=false;
  display : any;
  center: google.maps.LatLngLiteral = {lat: 14.0048, lng: 77.9110};
  zoom = 2;
  markerOptions: google.maps.MarkerOptions = {draggable: false};

  constructor(private companyService:CompaniesServiceService){}

  showMap(){
    this.map=true;
  }

  hideMap(){
    this.map=false;
  }

  captureClick(event: google.maps.MapMouseEvent){
    if(event.latLng!= null){
      this.center = (event.latLng.toJSON());
      this.company.coordinates.latitude=this.center.lat;
      this.company.coordinates.longitude=this.center.lng;
    }
  }

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
    }
    else{
      this.sendingObj['companyAddress']=this.company.companyAddress;
    }

    if(this.company.coordinates.longitude==400 || this.company.coordinates.latitude==400){
      this.senderCoordinates['latitude']=null;
      this.senderCoordinates['longitude']=null;
      this.sendingObj['coordinates']=this.senderCoordinates;
    }
    else{
      this.senderCoordinates['latitude']=this.company.coordinates.latitude;
      this.senderCoordinates['longitude']=this.company.coordinates.longitude;
      this.sendingObj['coordinates']=this.senderCoordinates;
    }
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
}
