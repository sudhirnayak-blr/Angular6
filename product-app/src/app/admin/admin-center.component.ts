import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css']
})
export class AdminCenterComponent implements OnInit {

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout(this.authService.model);
    this.router.navigate(['/']);
  }
}
