import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductRoutingModule } from "./product-routing.module";


@NgModule({
    imports:[ CommonModule, FormsModule, ProductRoutingModule],
    declarations: [ProductListComponent, ProductDetailComponent], 
    exports:[ProductListComponent, ProductDetailComponent]
})
    
export class ProductModule {

}