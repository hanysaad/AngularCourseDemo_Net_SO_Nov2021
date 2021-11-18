import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpClient) {
    
   }

   getAll():Observable<IProduct[]>
   {
     return this.httpService
                .get<IProduct[]>(`${environment.APIURL}/getproducts`);
   }

   getProductByID(prdID: number):Observable<IProduct>
   {
    return this.httpService.get<IProduct>(`${environment.APIURL}/getproduct/${prdID}`);
   }

   getProductCatID(catID: number)
   {
     
   }

   createProduct(prd:IProduct):Observable<any>
   {
     const httpOptions={
       headers:new HttpHeaders({
         'content-type': 'application/JSON'
        // ,'Authorization': 'AccessToken'
       })
     }
    return this.httpService
                .post(`${environment.APIURL}/insert`,JSON.stringify(prd), httpOptions);
   }

   editProduct(prdID:number, newPrd:IProduct)
   {

   }

   deleteProduct(prdID:number)
   {

   }
}
