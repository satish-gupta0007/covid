import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MainService {
  api_url = environment.api.baseurl
  constructor(private http: HttpClient,private route: Router) {
  }
  getLinks(){
    return this.http.get(`${this.api_url}`)
    .pipe(catchError(this.handleError));
  }
  getAllReports(){
    return this.http.get(`${this.api_url}/AllReports`)
    .pipe(catchError(this.handleError));
  }
  getAllDeaths(){
    return this.http.get(`${this.api_url}/Deaths`)
    .pipe(catchError(this.handleError))
  }
  getRecordByCountry(country){
    return this.http.get(`${this.api_url}/ReportsByCountries/${country}`)
    .pipe(catchError(this.handleError))
  }
  getIndianDetails(){
    return this.http.get(`https://api.covid19india.org/data.json`)
    .pipe(catchError(this.handleError))
  }
  getIndiaStateDistDetails(){
    return this.http.get(`https://api.covid19india.org/v2/state_district_wise.json`)
    .pipe(catchError(this.handleError))
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
