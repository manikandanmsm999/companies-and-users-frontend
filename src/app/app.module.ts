import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesManagementComponent } from './companies-management/companies-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesManagementComponent,
    UsersManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
