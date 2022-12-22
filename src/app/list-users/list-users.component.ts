import { Component } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
import { Company } from '../Company';
import { User } from '../User';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users!:User[];
  hasData:boolean=false;
  count:number=0;
  errMsg!:string;

  constructor(private userService:UsersServiceService){}

  getCompaniesListOnPageLoad(){
    this.userService.getUsersList().subscribe(
      (users:User[])=>
      {
        this.users=users;
        if(this.users==null || this.users==undefined){
          this.hasData=false;
        }else{
          for(let user in this.users){
            this.count+=1;
          }
          if(this.count==0){
            this.hasData=false;
          }
          else{
            this.hasData=true;
          }
        }
      },
      (err)=>{
        this.errMsg=err.error.message;
        this.hasData=false;
      }
    )
  }

  ngOnInit():void{
    this.getCompaniesListOnPageLoad();
  }
}
