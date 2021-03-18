import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  has_error = false;
  create_employee_msg: String='';

 
  isSelectLoading = false;
  signuppage=false;
  submitted = false;
  registerForm: FormGroup|any;
  
  constructor(private formBuilder: FormBuilder,private auth :AuthService) {
    if(this.auth.isLoggedIn()){
      this.signuppage=false
    }
    else{
      this.signuppage=true
    }
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      email: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      address: ['',[Validators.required]],
      employeeId: ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
      employeeType: ['',[Validators.required]]
    });


  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.auth.signup(this.registerForm.value).subscribe(res =>{
      window.alert(res)
    })
  }


}
