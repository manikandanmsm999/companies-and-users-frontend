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
  coord:Coordinates=new Coordinates(14.0048,77.9110);
  company:Company=new Company("1","","",this.coord);
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  map:boolean=false;
  display : any;
  center: google.maps.LatLngLiteral = {lat: this.company.coordinates.latitude, lng: this.company.coordinates.longitude};
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

  createCompany(){
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
}
