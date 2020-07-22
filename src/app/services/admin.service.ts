import { API } from './../api.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Storekeepers } from '../models/storekeeper.response';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _httpClient: HttpClient) {}

  //manual testing to check JwtIntercepter can remove this
  test(): Observable<any> {
    return this._httpClient.get<any>('http://localhost:3000/admin').pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getListOfStorekeepers(): Observable<Storekeepers> {
    return this._httpClient.get<Storekeepers>(API.getListOfStorekeepers()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateDriverDetails(driverDetails,driverId):Observable<any>{
    return this._httpClient.post<any>(API.updateDriverDetails(driverId),driverDetails).pipe(catchError((error)=>{return throwError(error);}));
  }

  deleteDriver(driverId):Observable<any>{
    return this._httpClient.delete<any>(API.deleteDriver(driverId)).pipe(catchError((error)=>{return throwError(error);}));
  }

}
