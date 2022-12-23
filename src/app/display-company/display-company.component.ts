import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';

@Component({
  selector: 'app-display-company',
  templateUrl: './display-company.component.html',
  styleUrls: ['./display-company.component.css']
})
export class DisplayCompanyComponent {
  company!:Company;
  success:boolean=false;

  display : any;
  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  zoom = 2;
  markerOptions: google.maps.MarkerOptions = {draggable: false};

  constructor(private router:ActivatedRoute,private companyService:CompaniesServiceService){}

  ngOnInit():void{
    this.router.params.subscribe((params)=>{
      this.companyService.getCompanyById(params['companyId']).subscribe(
        (company:Company)=>{
          this.company=company;
          this.center.lat=company.coordinates.latitude;
          this.center.lng=company.coordinates.longitude;

          this.success=true;
        },
        (err:any)=>{
          this.success=false;
        }
      )
    })
  }
}
