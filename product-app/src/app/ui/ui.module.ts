import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,RouterModule
  ],
  exports:[DashboardComponent, HeaderComponent, FooterComponent,LoginComponent, PageNotFoundComponent],
  declarations: [DashboardComponent, LayoutComponent, HeaderComponent, FooterComponent,PageNotFoundComponent, LoginComponent]
})
export class UiModule { }
