import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  userId!:string;
  success:boolean=false;
  onSearch:boolean=false;
  errMsg:string="";
  succMsg:string="";

  constructor(private userService:UsersServiceService){}

  deleteUserById(id:string){
    this.userService.deleteUser(id).subscribe(
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
