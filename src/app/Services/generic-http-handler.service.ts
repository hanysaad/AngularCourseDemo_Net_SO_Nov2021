import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponseVM } from '../ViewModels/http-response-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpHandlerService {

  constructor(private httpClient: HttpClient) 
  { }

  // getAll(): Observable <HttpResponseVM>
  // {
      
  // }

  // getByID(id:number): Observable <HttpResponseVM>
  // {

  // }

  // create(newItem:any): Observable <HttpResponseVM>
  // {

  // }

  // edit(id:number, item:any): Observable <HttpResponseVM>
  // {

  // }

  // delete(id:number): Observable <HttpResponseVM>
  // {

  // }
}
