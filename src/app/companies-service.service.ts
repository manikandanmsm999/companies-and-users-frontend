import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/dist/types/internal/Observable';
import { Company } from './Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesServiceService {

  constructor(private http:HttpClient) { }

  getCompaniesList(): Observable<Company[]>{
    return this.http.get<Company[]>('http://localhost:3030/companies/getCompanies');
  }

  getCompanyById(id:String): Observable<Company>{
    return this.http.get<Company>(`http://localhost:3030/companies/getCompanyById/${id}`);
  }

  createCompany(company:Company):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:3030/companies/createCompany',company,{ headers: options });
  }

  updateCompany(company:Company):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3030/companies/updateCompany',company,{ headers: options });
  }

  deleteCompany(id:String):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`http://localhost:3030/companies/deleteCompany/${id}`);
  }

}
