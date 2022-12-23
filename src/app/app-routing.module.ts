import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CompaniesManagementComponent} from './companies-management/companies-management.component';
import {UsersManagementComponent} from './users-management/users-management.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { AddUserToCompanyComponent } from './add-user-to-company/add-user-to-company.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DeactivateUserComponent } from './deactivate-user/deactivate-user.component';
import { RemoveUserFromCompanyComponent } from './remove-user-from-company/remove-user-from-company.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DisplayCompanyComponent } from './display-company/display-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'companies',component:CompaniesManagementComponent},
  {path:'users',component:UsersManagementComponent},
  {path:'companyList',component:ListCompaniesComponent},
  {path:'getCompanyById',component:GetCompanyComponent},
  {path:'createCompany',component:CreateCompanyComponent},
  {path:'addUserToCompany',component:AddUserToCompanyComponent},
  {path:'createUser',component:CreateUserComponent},
  {path:'userList',component:ListUsersComponent},
  {path:'getUserById',component:GetUserComponent},
  {path:'updateUser',component:UpdateUserComponent},
  {path:'deleteUser',component:DeleteUserComponent},
  {path:'deactivateUser',component:DeactivateUserComponent},
  {path:'removeUserFromCompany',component:RemoveUserFromCompanyComponent},
  {path:'deleteCompany',component:DeleteCompanyComponent},
  {path:'displayCompany/:companyId',component:DisplayCompanyComponent},
  {path:'updateCompany',component:UpdateCompanyComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
