import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './components/preview/preview.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { EmptyComponent } from './components/empty/empty.component';
import { RefreshComponent } from './components/refresh/refresh.component';



@NgModule({
  declarations: [PreviewComponent, LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent],
  imports: [
    CommonModule
  ],
  exports: [PreviewComponent, LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent]
})
export class SharedModule { }
