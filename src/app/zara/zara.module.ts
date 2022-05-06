import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZaraRoutingModule } from './zara-routing.module';
import { ZaraComponent } from './zara.component';


@NgModule({
  declarations: [ZaraComponent],
  imports: [
    CommonModule,
    ZaraRoutingModule
  ]
})
export class ZaraModule { }
