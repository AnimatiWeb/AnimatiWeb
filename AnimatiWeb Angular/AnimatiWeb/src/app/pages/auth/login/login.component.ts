import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../../services/auth/login.service';
import { LoginRequest } from '../../../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginError:string="";
  loginform!:FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private loginService:LoginService)
  { 
    this.loginform=this.formBuilder.group(
      {
        username:['',[Validators.required, Validators.email],[]],
        password:['',[Validators.required, Validators.minLength(8)],[]]
      }
    )
  }

  get password()
  {
  return this.loginform.get("password");
  }
  get email()
  {
  return this.loginform.get("email");
  }

  login()
  {
   
    if(this.loginform.valid){
      this.loginService.login(this.loginform.value as LoginRequest).subscribe({
        next: (userData) =>{
          console.log(userData);
        },
        error: (errorData) =>{
          console.error(errorData);
          this.loginError = errorData;
        },
        complete: () =>{
          console.info('Login completo');
          this.router.navigateByUrl('/inicio');
          this.loginform.reset();
        }
      })
      
    }
    else
    {
      this.loginform.markAllAsTouched();
    }
  }

  
}

