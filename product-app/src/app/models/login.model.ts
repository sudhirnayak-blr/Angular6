export class LoginModel {

    userName: string;
    password: string;

    constructor(uName: string, pwd: string) {
        this.userName = uName; 
        this.password = pwd;
    }
}