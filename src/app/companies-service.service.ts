import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { Company } from './Company';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesServiceService {

  constructor(private http:HttpClient) { }

  getCompaniesList(): Observable<Company[]>{
    //'http://localhost:3030/companies/getCompanies'
    return this.http.get<Company[]>('http://localhost:3030/getCompanies');
  }

  getCompanyById(id:string): Observable<Company>{
    //`http://localhost:3030/companies/getCompanyById/${id}`
    return this.http.get<Company>(`http://localhost:3030/${id}`);
  }

  createCompany(company:Company):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:3030/companies/createCompany',company,{ headers: options });
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
