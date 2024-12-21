import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule,
  NbToastrService,
  NbToastrModule,
} from '@nebular/theme';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NgxLoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbCardModule,
    NgxAuthRoutingModule,
    NbToastrModule.forRoot(), // Add this for toast notifications

  ],
  declarations: [
    NgxLoginComponent,
    RegisterComponent, // Declare the login component
  ],
})
export class NgxAuthModule {
  constructor() {
    console.log('Auth Module Loaded');
  }
}
