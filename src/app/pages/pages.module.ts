import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbListModule, NbMenuModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterOutlet } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    VendorComponent,
    ProductComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbMenuModule.forRoot(),
    PagesRoutingModule,
    RouterOutlet,
    SharedModule
  
  ]
})
export class PagesModule {
  constructor(){
    console.log('PagesModule');
  }
 }


