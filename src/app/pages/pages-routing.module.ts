import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from './pages.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'vendor',
        component: VendorComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'service',
        component: ServiceComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'booking',
        component: BookingComponent
      }
]}
]

    
@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild here
  exports: [RouterModule],
})
export class PagesRoutingModule {}
