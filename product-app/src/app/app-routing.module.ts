import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './ui/dashboard.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './ui/login.component';



const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  // { path: "product", component: ProductListComponent },
  // {
  //   path: "product/:id", component: ProductDetailComponent  }, 
  // { path: "admin", component: AdminHomeComponent }, 
  // { path: "add-product", component: AddProductComponent },
  // {path:"del-product", component:DelProductComponent},
  { path: "compose", component: ComposeMessageComponent, outlet: "popup" },
  {path:"login", component:LoginComponent},
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {path:"**", component:PageNotFoundComponent, pathMatch:"prefix"}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
