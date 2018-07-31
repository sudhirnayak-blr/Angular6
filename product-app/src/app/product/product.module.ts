import { NgModule } from "../../../node_modules/@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent], 
    exports:[ProductListComponent, ProductDetailComponent]
})
export class ProductModule {

}