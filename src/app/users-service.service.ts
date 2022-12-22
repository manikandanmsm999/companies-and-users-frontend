import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { LooseObject } from './LooseObject';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3030/users/getUsers').pipe(catchError(err=>{throw err}));
  }

  getUserById(id:string): Observable<User>{
    return this.http.get<User>(`http://localhost:3030/users/getUserById/${id}`).pipe(catchError(err=>{throw err}));
  }

  createUser(user:User):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:3030/users/createUser',user,{ headers: options }).pipe(catchError(err=>{throw err}));
  }

  updateUser(user:LooseObject):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3030/users/updateUser',user,{ headers: options }).pipe(catchError(err=>{throw err}));
  }

  deactivateUser(id:string):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`http://localhost:3030/users/deactivateUser/${id}`,null,{ headers: options }).pipe(catchError(err=>{throw err}));
  }

  deleteUser(id:string):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`http://localhost:3030/users/deleteUser/${id}`).pipe(catchError(err=>{throw err}));
  }
}
