import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/dist/types/internal/Observable';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3030/users/getUsers');
  }

  getUserById(id:String): Observable<User>{
    return this.http.get<User>(`http://localhost:3030/users/getUserById/${id}`);
  }

  createUser(user:User):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:3030/users/createUser',user,{ headers: options });
  }

  updateUser(user:User):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3030/users/updateUser',user,{ headers: options });
  }

  deactivateUser(user:User):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3030/users/deactivateUser',user,{ headers: options });
  }

  deleteUser(id:String):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`http://localhost:3030/users/deleteUser/${id}`);
  }
}
