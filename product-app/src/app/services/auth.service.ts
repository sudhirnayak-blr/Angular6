import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { LoginModel } from "../models/login.model";

@Injectable()
export class AuthService {
    isLoggedIn :boolean = false; 
    redirectUrl: string = ""; 
    model: LoginModel;
    constructor() {
        this.model = new LoginModel("","");
    }
    login(item: LoginModel): Observable<boolean> {
        this.model = item;
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        )
    }
    logout(item: LoginModel): void{
        this.model = new LoginModel("", "");
        this.isLoggedIn = false;
    }
}