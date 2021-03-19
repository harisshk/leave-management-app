import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Url} from './../url/url';
import jwt_decode from 'jwt-decode';
import { LeaveService } from '../service/leave.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url= Url.API_ENDPOINT+'/user';
  constructor(private http:HttpClient,private leaveService:LeaveService) { }
  age=0;
  ageConvert(dob:Date){
    const convertAge = new Date(dob);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
  signup(users:any){
    this.ageConvert(users.dob);
    var data={
      name:users.name,
      age:this.age,
      employeeId:users.employeeId,
      employeeType:users.employeeType,
      gender:users.gender,
      phoneNumber:users.phoneNumber,
      email:users.email,
      address:users.address,
      password:users.password

    }
    return this.http.post<any>(this.url+'/register',data)

  }
  login(data:any){
    const credentials = {
      email:data.username,
      password:data.password
    }
    

    return this.http.post<any>(this.url+'/login',credentials);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('id');
    return true;
  }
  isLoggedIn(){
    var token= localStorage.getItem('token');
    if( token===null){
      return false;
    }
    else{
      return true;
    }
    
  }
  isAdmin(){
   if (this.isLoggedIn()){
      var token = JSON.stringify(localStorage.getItem('token'));
      var decode =Object.values(jwt_decode(token));

      if (decode[1]==='user_admin'){
        
        return true
      }
      
        return false
        console.log(' no Admin');
       
   }  
   else{
     return false
     console.log('not logged');
   }
  }

  updateLeave(user:any){
    const data={
      _id:user.userId,
      employeeId:user.employeeId,
      sickLeaveAlloted:10,
      sickLeaveTaken:0,
      annualLeaveAlloted:8,
annualLeaveTaken:0,
compensatoryLeaveAlloted: 4,
compensatoryLeaveTaken :0,
casualLeaveAlloted:  4,
casualLeaveTaken  : 0
    }
    return this.http.post<any>(Url.API_ENDPOINT+'/leave/postLeave',data)
  }
}
//coommnet