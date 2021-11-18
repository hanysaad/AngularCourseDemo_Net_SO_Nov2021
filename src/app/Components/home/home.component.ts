import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { StoreInfo } from 'src/app/models/store-info';
import { ScheduledAdsService } from 'src/app/Services/scheduled-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  storeData:StoreInfo;
  showLogo:boolean=true;
  clientFeedback:string="Your Feedback";

  // private subsription!: Subscription;
  private subsriptionList: Subscription[]=[];

  constructor( private schAds: ScheduledAdsService) { 
    this.storeData=new StoreInfo("ITI Store","https://fakeimg.pl/250x100/",["Store", "Delivery", "selling"])
  }
 

  ngOnInit(): void {
    const observer={ //subscriber
      next: (msg:string)=>{console.log(msg)}
      ,error: (err:string)=>{console.log("error: " + err)}
      ,complete: ()=>{console.log ("Thank you")}
    }

    // this.subsription=this.schAds.receiveSchAds().subscribe(observer);

    // let sub=this.schAds.getSchAds().subscribe(observer);
    // this.subsriptionList.push(sub);

    let AdsFiltered=this.schAds.getSchAds().pipe(
      filter((ad:string)=> ad.includes("White Friday"))
      , map((ad:string)=>"Promotion: " + ad)
    );

    let sub=AdsFiltered.subscribe(observer);
    this.subsriptionList.push(sub);

    // let sub2=this.schAds.getSerialAds().subscribe((msg)=>{
    //   alert (msg);
    // });
    // this.subsriptionList.push(sub2);

    // this.schAds.receiveSchAds().subscribe(
    //   (msg)=>{alert(msg)}
    //   // ,(err)=>{alert("error: "+ err)}
    //   // ,()=>{ alert("Completed!")}
    // );
  }

  ngOnDestroy(): void {
    //this.subsription.unsubscribe();
    for(let sub of this.subsriptionList)
    {
      sub.unsubscribe();
    }
  }

  toggleImg()
  {
    this.showLogo=!this.showLogo;
  }
  

}
