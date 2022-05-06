import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZaraComponent } from './zara.component';

const routes: Routes = [{ path: '', component: ZaraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZaraRoutingModule { }
