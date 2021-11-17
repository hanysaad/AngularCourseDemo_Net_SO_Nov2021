import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductStaticService } from 'src/app/Services/product-static.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sentPrdID: number=0;
  prd:IProduct= {} as IProduct;
  constructor(private activatedRouter:ActivatedRoute
            , private prdService:ProductStaticService
            , private router:Router
            , private location:Location) 
  { }

  ngOnInit(): void {
    // this.sentPrdID= Number(this.activatedRouter.snapshot.paramMap.get("pID"));
    // this.prd=this.prdService.getProductByID(this.sentPrdID);
    console.log("In ngOnInit...");

    this.activatedRouter.paramMap.subscribe((params)=>{
      this.sentPrdID=Number(params.get("pID"));
      this.prd=this.prdService.getProductByID(this.sentPrdID);
    });

    //console.log(this.sentPrdID);
  }

  prevProduct()
  {
    this.router.navigate(['/Products', this.sentPrdID-1])
    .then(()=>{
      console.log("Navigate Occured...")
    })
  }

  nextProduct()
  {
    this.router.navigate(['/Products', this.sentPrdID+1])
  }

  goBack()
  {
    // this.router.navigate(['/Order']);
    this.location.back();
  }

}
