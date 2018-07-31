import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { DelProductComponent } from './del-product.component';
import { AdminHomeComponent } from './admin-home.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AddProductComponent, DelProductComponent, AdminHomeComponent],
  exports:[AdminHomeComponent]
})
export class AdminModule { }
