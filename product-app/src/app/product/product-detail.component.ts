import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, tap, map } from "rxjs/operators";

import { ProductModel } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { slideInAnimations } from '../animations';
import { style } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations:[slideInAnimations]
})
export class ProductDetailComponent implements OnInit {

  @HostBinding("@routeAnimation") routeAnimation = true;
  @HostBinding("style.display") display = "block";
  @HostBinding("style.position") position = "absolute";

  model$: Observable<ProductModel>; 

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: ProductService
  ) { }

  ngOnInit() {
    this.model$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getDetails(params.get("id"))
      ))
    //Alternate fallback method, in case the above method is not required.
    // let id = this.route.snapshot.paramMap.get("id");
    // this.service.getDetails(id)
    //   .subscribe((response) =>
    //     this.model = response);
  }
 
}
