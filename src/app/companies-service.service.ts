import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { Company } from './Company';
import {CompanyAndUser} from './CompanyAndUser';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesServiceService {

  constructor(private http:HttpClient) { }

  getCompaniesList(): Observable<Company[]>{
    return this.http.get<Company[]>('http://localhost:3030/companies/getCompanies').pipe(catchError(err=>{throw err}));
  }

  getCompanyById(id:string): Observable<Company>{
    return this.http.get<Company>(`http://localhost:3030/companies/getCompanyById/${id}`).pipe(catchError(err=>{throw err}));
  }

  createCompany(company:Company):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:3030/companies/createCompany',company,{ headers: options }).pipe(catchError(err=>{throw err}));;
  }

  addUserToCompany(companyAndUser:CompanyAndUser):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:3030/companies/addUserToCompany',companyAndUser,{ headers: options });
  }

  updateCompany(company:Company):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3030/companies/updateCompany',company,{ headers: options });
  }

  deleteCompany(id:string):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`http://localhost:3030/companies/deleteCompany/${id}`);
  }

}
