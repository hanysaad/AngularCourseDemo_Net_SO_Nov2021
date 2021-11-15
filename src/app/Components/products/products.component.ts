import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 prdList: IProduct[]=[];
 todayDate= Date.now();
  constructor() {
    this.prdList=[
      {id:1, Name:"Lenovo Thinkpa laptop", Quantity:1, Price:10,ImgURL:"https://picsum.photos/id/1/200/100", CategoryID: 1},
      {id:2, Name:"Apple MacBook", Quantity:0, Price:2000000,ImgURL:"https://picsum.photos/id/0/200/100", CategoryID: 1},
      {id:3, Name:"Samsung Tab", Quantity:2, Price:49999.99,ImgURL:"https://picsum.photos/id/2/200/100", CategoryID: 2},
      {id:4, Name:"Ipad", Quantity:10, Price:30000000,ImgURL:"https://picsum.photos/id/3/200/100", CategoryID: 2},
      {id:5, Name:"Samsung Note 10", Quantity:44, Price:550,ImgURL:"https://picsum.photos/id/4/200/100", CategoryID: 3},
      {id:6, Name:"IPhone 13", Quantity:0, Price:990,ImgURL:"https://picsum.photos/id/6/200/100", CategoryID: 3}
    ];
   }

  ngOnInit(): void {
  }

}
