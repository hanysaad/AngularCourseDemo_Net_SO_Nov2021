import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private isLoggedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }

  login(usrName: string, pwd: string): boolean {

    // Call Login API (usrName, pwd), if correct return Access Token
    let usrToken: string = "0600f938-7c7f-4bef-a569-3e15dcc43140";
    localStorage.setItem('usrToken', usrToken);
    this.isLoggedSubject.next(true);
    return true;
  }

  logout() {
    // Call Logout API
    localStorage.removeItem('usrToken');
    this.isLoggedSubject.next(false);
  }

  loginStatus(): boolean {
    if (localStorage.getItem('usrToken')) {
      return true;
    }
    else {
      return false;
    }
  }

  loginStatusSubject(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  
}
