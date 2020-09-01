import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated = false;

  constructor() { }

  get userIsAuthenticated(){
    return this.userAuthenticated
  }
  isLogIn(){
    this.userAuthenticated =  true;
  }
  isLogOut(){
    this.userAuthenticated =  false;
  }
}
