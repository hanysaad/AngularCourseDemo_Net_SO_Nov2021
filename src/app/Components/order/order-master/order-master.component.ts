import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList:ICategory[];
  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0;
  selCatProducts:IProduct[]=[];

  //@ViewChild('custNameInp') custNameInpElement:ElementRef|null=null;
  //@ViewChild('custNameInp') custNameInpElement:ElementRef|undefined=undefined;
  //@ViewChild('custNameInp') custNameInpElement:ElementRef= {} as ElementRef;
  //@ViewChild('custNameInp') custNameInpElement?:ElementRef;
  @ViewChild('custNameInp') custNameInpElement!:ElementRef;
  @ViewChild(OrderDetailsComponent) orderDetailsObj!:OrderDetailsComponent;

  constructor() {
    this.catList=[
      {id:1, Name:'Laptop'},
      {id:2, Name:'Tablet'},
      {id:3, Name:'Mobile'}
    ];
   }
  ngAfterViewInit(): void {
    this.custNameInpElement.nativeElement.style.backgroundColor="lightblue";
    this.custNameInpElement.nativeElement.value="Your name here";

    this.selCatProducts= this.orderDetailsObj.prdlistForSelCat;
    console.log(this.selCatProducts);
  }

  ngOnInit(): void {
  }

  onOrderTotalPriceChanged(orderTotalPrice:number)
  {
    this.receivedOrderTotalPrice=orderTotalPrice;
  }

  getSelCatProducts()
  {
    this.selCatProducts= this.orderDetailsObj.prdlistForSelCat;
    console.log(this.selCatProducts);
  }
}
