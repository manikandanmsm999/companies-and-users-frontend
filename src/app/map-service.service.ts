import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(private http:HttpClient) { }

  getCoordinates(address:string): Observable<any>{
    return this.http.get<any>(`http://localhost:3030/map/getCoordinates/${address}`).pipe(catchError(err=>{throw err}));
  }
}
