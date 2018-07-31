import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product.service";
import { ProductModel } from "../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductModel[]; 
  model: ProductModel;

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((response) => {
      this.productList = response;
    });
  }
}
