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
  latitude=51.678418;
  longitude=7.809007;
  success:boolean=false;

  constructor(private router:ActivatedRoute,private companyService:CompaniesServiceService){}

  ngOnInit():void{
    this.router.params.subscribe((params)=>{
      this.companyService.getCompanyById(params['companyId']).subscribe(
        (company:Company)=>{
          this.company=company;
          this.success=true;
        },
        (err:any)=>{
          this.success=false;
        }
      )
    })
  }
}
