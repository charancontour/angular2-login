import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];


@Injectable()
export class AuthService {

  constructor(private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }


  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['dashboard']);
      return true;
    }
    return false;

  }

  isAGuest(){
    if (localStorage.getItem("user") != null){
        this._router.navigate(['dashboard']);
    }
  }

  isAUser(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  }

}
