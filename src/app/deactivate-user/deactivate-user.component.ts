import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-deactivate-user',
  templateUrl: './deactivate-user.component.html',
  styleUrls: ['./deactivate-user.component.css']
})
export class DeactivateUserComponent {
  userId!:string;
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";

  constructor(private userService:UsersServiceService){}

  deactivateUser(id:string){
    this.userService.deactivateUser(id).subscribe(
      (data:any)=>
      {
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
