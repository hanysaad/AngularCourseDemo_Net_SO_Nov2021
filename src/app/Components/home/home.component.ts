import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/models/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeData:StoreInfo;
  showLogo:boolean=true;
  constructor() { 
    this.storeData=new StoreInfo("ITI Store","https://fakeimg.pl/250x100/",["Store", "Delivery", "selling"])
  }

  ngOnInit(): void {
  }

  toggleImg()
  {
    this.showLogo=!this.showLogo;
  }

}
