import { Component } from '@angular/core';
import { User } from '../User';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {
  user!:User;
  userId!:string;
  hasData:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";

  constructor(private userService:UsersServiceService){}

  getUserById(id:string){
    this.userService.getUserById(id).subscribe(
      (data:User)=>
      {
        this.user=data;
        if(this.user==null || this.user==undefined){
          this.hasData=false;
          this.onSearch=true;
        }else{
          this.hasData=true;
          this.onSearch=true;
        }
      },
      (err)=>{
        this.errMsg=err.error.message;
        this.onSearch=true;
        this.hasData=false;
      }
    )
  }
}
