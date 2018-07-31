import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdminCenterComponent } from './admin-center.component';
//import { AdminProductListComponent } from './admin-product-list.component';
//import { AdminProductDetailComponent } from './admin-product-detail.component';
import { AdminHomeComponent } from './admin-home.component';
import { ManageProductComponent } from './manage-product.component';
import { ManageCategoriesComponent } from './manage-categories.component';
import { AuthGuard } from '../services/auth.guard';

/*const routes: Routes = [
  {
    path: "admin",
    component: AdminCenterComponent, 
    children: [
      {
        path: "",
        component: AdminHomeComponent,
        children: [
          {
            path: ":id",
            component:AdminProductDetailComponent
          },
          {
            path: "",
            component:AdminHomeComponent
          }
        ]
      }
    ]
  }
];
*/

const routes: Routes = [
  {
    path: "admin",
    component: AdminCenterComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: "",
        canActivateChild:[AuthGuard],
        children: [
          { path: "products", component: ManageProductComponent },
          { path: "categories", component: ManageCategoriesComponent },
          { path: "", component: AdminHomeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
