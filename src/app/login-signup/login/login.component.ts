import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_user_msg: string='';
  has_error = false;
  hide = true;
  id='';
  decode=Array();
 
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin(form:any) {
    this.auth.login(form.value).subscribe(res =>{
      this.has_error = false;
      this.login_user_msg = 'Login in, Please wait... !!!';
      // console.log(res)
      localStorage.setItem('token', res['token']);
      var token = JSON.stringify(localStorage.getItem('token'));
      this.decode =Object.values(jwt_decode(token));
      this.id=this.decode[0];
      localStorage.setItem('id',this.id)
      this.router.navigate(['/dashboard/home']);
      
    },
      error => {
        // console.log("user login error", error.error);
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
      });
    }

}
