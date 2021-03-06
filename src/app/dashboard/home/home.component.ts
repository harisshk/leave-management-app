import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isAdmin=false
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.isAdmin=this.auth.isAdmin()
  }

}
