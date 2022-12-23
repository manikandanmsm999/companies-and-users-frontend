import { Component } from '@angular/core';
import { LooseObject } from '../LooseObject';
import { User } from '../User';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  
  user:User=new User("","","","","","",true);
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";
  sendingObj:LooseObject ={};

  constructor(private userService:UsersServiceService){}

  updateUser(){
    this.sendingObj['userId']=this.user.userId;
    if(this.user.firstName==""){
      this.sendingObj['firstName']=null;
    }
    else{
      this.sendingObj['firstName']=this.user.firstName;
    }

    if(this.user.lastName==""){
      this.sendingObj['lastName']=null;
    }
    else{
      this.sendingObj['lastName']=this.user.lastName;
    }

    if(this.user.email==""){
      this.sendingObj['email']=null;
    }
    else{
      this.sendingObj['email']=this.user.email;
    }

    if(this.user.designation==""){
      this.sendingObj['designation']=null;
    }
    else{
      this.sendingObj['designation']=this.user.designation;
    }

    if(this.user.dob==""){
      this.sendingObj['dob']=null;
    }
    else{
      this.sendingObj['dob']=this.user.dob;
    }
    this.userService.updateUser(this.sendingObj).subscribe(
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
