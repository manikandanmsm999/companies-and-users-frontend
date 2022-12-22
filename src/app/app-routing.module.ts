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
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
