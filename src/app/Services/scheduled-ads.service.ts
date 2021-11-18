import { Injectable } from '@angular/core';
import { from, Observable, of, UnsubscriptionError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledAdsService {
  adsList: string[];
  constructor() {
    this.adsList = ["Big sale starts soon..."
      , "Wait for our White Friday offers"
      , "Best shopping experience"
      , "Big sale on White Friday"
      , "Shop now.."
    ];
  }

  getSchAds() {
    //let adsObs = 
    return new Observable <string>((observer) => {
      let counter = 0;
      let msgTimer=setInterval(() => {
        if (this.adsList[counter] == "") {
          observer.error("Empty string");
        }
        observer.next(this.adsList[counter])
        if (counter < this.adsList.length-1)
          counter++;
        else
          observer.complete(); 

       }, 3000);

       return { 
         //Will be called in 2 cases: 1- Unsubscribe, 2- Complete
         unsubscribe(){
          clearInterval(msgTimer);
          console.log("Unsubscribe");
         }
       }
    });

    //return adsObs;
  }

  // getSerialAds(){
  //   // return new Observable <string>((observer) => {
  //   //   for (let msg of this.adsList)
  //   //   {
  //   //     observer.next(msg);
  //   //   }
  //   //   return { 
  //   //     //Will be called in 2 cases: 1- Unsubscribe, 2- Complete
  //   //     unsubscribe(){
  //   //       console.log("Unsubscribe");
  //   //     }
  //   //    }
  //   // });
  // }

  getSerialAds(){
    return from(this.adsList);
    // return of("msg1", "msg2", "msg3");
  }

  


}
