import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule } from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule
    
  ],
  exports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule
  ],
})
export class SharedModule { }
