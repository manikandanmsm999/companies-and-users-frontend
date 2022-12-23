import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesManagementComponent } from './companies-management/companies-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { CompaniesServiceService } from './companies-service.service';
import { UsersServiceService } from './users-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayCompanyComponent } from './display-company/display-company.component';
import { AddUserToCompanyComponent } from './add-user-to-company/add-user-to-company.component';
import { RemoveUserFromCompanyComponent } from './remove-user-from-company/remove-user-from-company.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeactivateUserComponent } from './deactivate-user/deactivate-user.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesManagementComponent,
    UsersManagementComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListCompaniesComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    GetCompanyComponent,
    DisplayCompanyComponent,
    AddUserToCompanyComponent,
    RemoveUserFromCompanyComponent,
    ListUsersComponent,
    GetUserComponent,
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    DeactivateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [CompaniesServiceService,UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// for map-> https://github.com/ankush1802/Angular14GoogleMaps
//api key is mentioned in index.html file inside script tag
//npm install @angular/google-maps --save
