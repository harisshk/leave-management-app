import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private ApiEnd = Url.API_ENDPOINT+'/leave';

  constructor(private http :HttpClient) { }
  getLeaveById(){
    var id = localStorage.getItem('id');
    var url_data = this.ApiEnd + '/getLeave/'+id
     return this.http.get(url_data);
  }
}
