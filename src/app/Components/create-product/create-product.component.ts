import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  newPrd:IProduct={} as IProduct;
  constructor(private prdService: ProductService) {
    this.newPrd={
      Name: 'From Angular - .Net 2021',
      Price:11,
      Quantity:111
    }
   }

  ngOnInit(): void {
  }

  createProduct()
  {
    this.prdService.createProduct(this.newPrd).subscribe({
      next: res=>{console.log(res);
      },
      error: err=>{
        console.log(err)
      }
    });
  }

}
