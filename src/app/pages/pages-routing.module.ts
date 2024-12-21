import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from './pages.component';
import { VendorComponent } from './vendor/vendor.component';

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
      }
]}
]

    
@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild here
  exports: [RouterModule],
})
export class PagesRoutingModule {}
