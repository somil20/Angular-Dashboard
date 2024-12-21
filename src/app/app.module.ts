import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { PagesModule } from './pages/pages.module';
//import { NgxAuthModule } from './auth/auth.module';


@NgModule({  
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    
    RouterModule.forRoot([
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule) },
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ]),
   // NgxAuthModule,
   // PagesModule
    
   
    
     
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {
    constructor(){
      console.log("App module loaded");
     }
   
  }
