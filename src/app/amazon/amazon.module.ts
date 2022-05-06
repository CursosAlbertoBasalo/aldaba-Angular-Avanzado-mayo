import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmazonRoutingModule } from './amazon-routing.module';
import { AmazonComponent } from './amazon.component';
import { LibrosComponent } from './components/libros/libros.component';
import { ComidaComponent } from './components/comida/comida.component';


@NgModule({
  declarations: [AmazonComponent, LibrosComponent, ComidaComponent],
  imports: [
    CommonModule,
    AmazonRoutingModule
  ]
})
export class AmazonModule { }
