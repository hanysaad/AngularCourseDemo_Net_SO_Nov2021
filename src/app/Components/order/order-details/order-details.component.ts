import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductStaticService } from 'src/app/Services/product-static.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
  // , providers:[]
})
export class OrderDetailsComponent implements OnInit, OnChanges {
prdList: IProduct[]=[];
prdlistForSelCat:IProduct[]=[];
@Input() sentSelCatID:number=0;
orderTotalPrice:number=0;
@Output() orderTotalPriceChanged: EventEmitter<number>;

//prdService:ProductStaticService;
  constructor(private prdService:ProductStaticService) {
    //this.prdService=prdService;
    this.orderTotalPriceChanged=new EventEmitter<number>();
   }

  ngOnChanges(changes: SimpleChanges): void {
      this.prdlistForSelCat=this.prdService.getProductsByCatID(this.sentSelCatID);
  }

  ngOnInit(): void {
    this.prdList=this.prdService.getAllProducts();
  }

  calcTotalPrice(itemPrice:number, itemCount:any)
  {
    // this.orderTotalPrice+=(itemPrice * parseInt(itemCount));
    // this.orderTotalPrice+=(itemPrice * Number(itemCount));
    // this.orderTotalPrice+=(itemPrice * itemCount as number);
    this.orderTotalPrice+=(itemPrice * +itemCount);

    this.orderTotalPriceChanged.emit(this.orderTotalPrice);
  }

}
