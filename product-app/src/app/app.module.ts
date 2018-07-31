import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';
import { ComposeMessageComponent } from './compose-message.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,  ComposeMessageComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    FormsModule, HttpClientModule,
    UiModule, ProductModule, AdminModule,
    AppRoutingModule
  ],
  exports:[FormsModule],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
