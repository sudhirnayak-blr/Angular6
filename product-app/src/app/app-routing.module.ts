import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './ui/dashboard.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AdminHomeComponent } from './admin/admin-home.component';
import { AddProductComponent } from './admin/add-product.component';
import { DelProductComponent } from './admin/del-product.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "product", component: ProductListComponent },
  {
    path: "product/:id", component: ProductDetailComponent  }, 
  { path: "admin", component: AdminHomeComponent }, 
  { path: "add-product", component: AddProductComponent },
  {path:"del-product", component:DelProductComponent},
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {path:"**", component:PageNotFoundComponent, pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
