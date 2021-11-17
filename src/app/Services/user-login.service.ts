import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor( ) { }

  login(usrName:string, pwd:string):boolean
  {
    // Call Login API (usrName, pwd), if correct return Access Token
    let usrToken:string="0600f938-7c7f-4bef-a569-3e15dcc43140";
    localStorage.setItem('usrToken', usrToken);
    return true;
  }

  logout()
  {
    // Call Logout API
    localStorage.removeItem('usrToken');
  }

  loginStatus():boolean
  {
    if(localStorage.getItem('usrToken'))
    {
      return true;
    }
    else
    {
      return false;
    }    
  }
}
