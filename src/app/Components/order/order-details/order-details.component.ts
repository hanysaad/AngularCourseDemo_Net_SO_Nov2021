import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductStaticService } from 'src/app/Services/product-static.service';
import { ProductService } from 'src/app/Services/product.service';

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
  constructor(private prdService:ProductStaticService
            , private prdServiceFrmAPI:ProductService
            , private router:Router) {
    //this.prdService=prdService;
    this.orderTotalPriceChanged=new EventEmitter<number>();
   }

  ngOnChanges(changes: SimpleChanges): void {
      this.prdlistForSelCat=this.prdService.getProductsByCatID(this.sentSelCatID);
  }

  ngOnInit(): void {
    //this.prdList=this.prdService.getAllProducts();
    this.prdServiceFrmAPI.getAll().subscribe({
      next: (products)=>{
        this.prdList=products;
        this.prdlistForSelCat=Array.from(this.prdList);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  calcTotalPrice(itemPrice:number, itemCount:any)
  {
    // this.orderTotalPrice+=(itemPrice * parseInt(itemCount));
    // this.orderTotalPrice+=(itemPrice * Number(itemCount));
    // this.orderTotalPrice+=(itemPrice * itemCount as number);
    this.orderTotalPrice+=(itemPrice * +itemCount);

    this.orderTotalPriceChanged.emit(this.orderTotalPrice);
  }

  openProductDetails(productID:number|undefined)
  {
    this.router.navigate(['/Products',productID])
      // .then(()=>{console.log('Navigation completed')})
      // .catch(()=>{console.log('Error in navigation')});
  }

}
