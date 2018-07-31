import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "https://localhost:5001/api/product";
  
  constructor(private http:HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    let obs : Observable<ProductModel[]> = this.http.get<ProductModel[]>(this.url); 
    return obs;
  }
  getDetails(id) {
    let getUrl = this.url + "/" + id; 
    console.log(getUrl);
    let obs: Observable<ProductModel> = this.http.get<ProductModel>(getUrl);
    return obs;
  }

}
