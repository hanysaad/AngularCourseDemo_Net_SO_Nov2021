import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUsrLogged:boolean = false;
  constructor(private usrLoginService: UserLoginService) 
  { }

  ngOnInit(): void {
    this.usrLoginService.loginStatusSubject().subscribe({
      next: (logStatus)=>{
        this.isUsrLogged=logStatus;
      }
    });
  }

}
