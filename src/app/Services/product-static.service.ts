import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductStaticService {
  private prdList: IProduct[];
  constructor() {
    this.prdList=[
      {id:1, Name:"Lenovo Thinkpad laptop", Quantity:1, Price:10,ImgURL:"https://picsum.photos/id/1/200/100", CategoryID: 1},
      {id:2, Name:"Apple MacBook", Quantity:0, Price:20,ImgURL:"https://picsum.photos/id/0/200/100", CategoryID: 1},
      {id:3, Name:"Samsung Tab", Quantity:2, Price:499,ImgURL:"https://picsum.photos/id/2/200/100", CategoryID: 2},
      {id:4, Name:"Ipad", Quantity:10, Price:3000,ImgURL:"https://picsum.photos/id/3/200/100", CategoryID: 2},
      {id:5, Name:"Samsung Note 10", Quantity:44, Price:550,ImgURL:"https://picsum.photos/id/4/200/100", CategoryID: 3},
      {id:6, Name:"IPhone 13", Quantity:0, Price:990,ImgURL:"https://picsum.photos/id/6/200/100", CategoryID: 3}
    ];
   }

   getAllProducts(): IProduct[]
   {
     return this.prdList;
   }

   getProductsByCatID(catID: number):IProduct[]
   {
     if(catID==0)
      return this.prdList;
    else
      return this.prdList.filter(prd=>prd.CategoryID==catID);
   }

   getProductByID(prdID: number):IProduct|undefined
   {
     return this.prdList.find(prd=>prd.id==prdID);
   }

   addProduct(){

   }

   updateProduct(){

   }

   deleteProduct(){

   }
}
