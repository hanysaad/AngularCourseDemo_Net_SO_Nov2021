import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor( private usrLoginService: UserLoginService) { }
  isUsrLogged:boolean=false;
  
  ngOnInit(): void {
    this.isUsrLogged=this.usrLoginService.loginStatus();
  }

  login()
  {
    this.usrLoginService.login("AA", "123");
    this.isUsrLogged=this.usrLoginService.loginStatus();
  }

  logout()
  {
    this.usrLoginService.logout();
    this.isUsrLogged=this.usrLoginService.loginStatus();
  }

}
