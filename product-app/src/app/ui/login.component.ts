import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from "../models/login.model";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel; 
  message: string; 

  constructor(public authService:AuthService, public router:Router) {
    this.model = authService.model;
    this.setMessage();
  }

  ngOnInit() {

  }
  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }
  login() {
    this.message = "Trying to login......"
    this.authService.login(this.model).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : "/admin"; 
        this.router.navigate([redirectUrl]);
      }
    })
  }
  logout() {
    this.authService.logout(this.model); 
    this.setMessage();
  }
}
