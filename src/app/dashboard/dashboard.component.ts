import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  open=false;
  isAdmin=false
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.isAdmin=this.auth.isAdmin()
  }
  logout(){
    if(this.auth.logout()){
      this.router.navigate(['/login'])
    }
  }
  
}
