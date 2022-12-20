import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  companies!:Company[];
  hasData:boolean=false;
  count:number=0;

  constructor(private companyService:CompaniesServiceService){}

  getCompaniesListOnPageLoad(){
    this.companyService.getCompaniesList().subscribe(
      (companies:Company[])=>
      {
        this.companies=companies;
        if(this.companies==null || this.companies==undefined){
          this.hasData=false;
          console.log("hi1");
        }else{
          for(let company in this.companies){
            this.count+=1;
          }
          if(this.count==0){
            this.hasData=false;
          }
          else{
            this.hasData=true;
          }
        }
      }
    )
  }

  ngOnInit():void{
    this.getCompaniesListOnPageLoad();
  }
  
}
