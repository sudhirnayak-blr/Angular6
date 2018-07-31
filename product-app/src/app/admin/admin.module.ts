import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";


import { AdminHomeComponent } from './admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminCenterComponent } from './admin-center.component';
import { AdminProductListComponent } from './admin-product-list.component';
import { AdminProductDetailComponent } from './admin-product-detail.component';
import { ManageProductComponent } from './manage-product.component';
import { ManageCategoriesComponent } from './manage-categories.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,RouterModule
  ],
  declarations: [AdminHomeComponent, AdminCenterComponent, AdminProductListComponent, AdminProductDetailComponent, ManageProductComponent, ManageCategoriesComponent],
  exports:[AdminHomeComponent]
})
export class AdminModule { }
