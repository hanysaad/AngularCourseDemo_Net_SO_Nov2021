import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { DollarToEgPoundPipe } from './Pipes/dollar-to-eg-pound.pipe';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { OrderDetailsComponent } from './Components/order/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    ProductsComponent,
    LightBoxDirective,
    DollarToEgPoundPipe,
    OrderMasterComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
