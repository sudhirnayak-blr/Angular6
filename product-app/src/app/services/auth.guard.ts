import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {
        
    }
 

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //1. Initial Setup. Should be changed later
       // console.log("AuthGuard#canActivate called."); 
        //return true;
        //2. Setup changed to simulate a login.
        let url: string = state.url; 
        return this.checkLogin(url);

    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    checkLogin(url:string):boolean {
        if (this.authService.isLoggedIn) return true; 
        this.authService.redirectUrl = url; 
        this.router.navigate(['/login']);   
        return false;
    }
}