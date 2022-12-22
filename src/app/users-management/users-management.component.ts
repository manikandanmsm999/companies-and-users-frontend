import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent {

  constructor(private router:Router){}
  
  gotoCreateUser(){
    this.router.navigate(['/','createUser']);
  }
}
