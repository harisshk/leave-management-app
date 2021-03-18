import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Url} from './../url/url';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
private ApiEnd = Url.API_ENDPOINT+'/employee';
  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any[]>{
    return this.http.get<any>(this.ApiEnd + '/getAllEmployee');
  }
}
