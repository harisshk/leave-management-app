import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_user_msg: string='';
  has_error = false;
  hide = true;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin(form:any) {
    this.auth.login(form.value).subscribe(res =>{
      this.has_error = false;
      this.login_user_msg = 'Login in, Please wait... !!!';
      localStorage.setItem('token', res['token']);
      localStorage.setItem('refreshToken', res.refresh_token);
      this.router.navigate(['/dashboard/home']);
      console.log(localStorage.getItem('token'));
      console.log(localStorage.getItem('token'));
    },
      error => {
        // console.log("user login error", error.error);
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
      });
    }

}
