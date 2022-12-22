import { Component } from '@angular/core';
import { User } from '../User';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user:User=new User("1","","","","","",true);
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  checkNaN:boolean=false;

  constructor(private userService:UsersServiceService){}

  createUser(){
    this.userService.createUser(this.user).subscribe(
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
