import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent {

  constructor(private router:Router){}
  
  gotoUsersList(){
    this.router.navigate(['/','userList']);
  }

  gotoGetUserById(){
    this.router.navigate(['/','getUserById']);
  }

  gotoCreateUser(){
    this.router.navigate(['/','createUser']);
  }

  gotoUpdateUser(){
    this.router.navigate(['/','updateUser']);
  }

  gotoDeleteUser(){
    this.router.navigate(['/','deleteUser']);
  }

  gotoDeactivateUser(){
    this.router.navigate(['/','deactivateUser']);
  }
}
