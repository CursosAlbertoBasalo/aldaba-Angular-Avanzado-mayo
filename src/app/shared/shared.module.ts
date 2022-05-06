import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './components/preview/preview.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { EmptyComponent } from './components/empty/empty.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { AsyncWrapperComponent } from './components/async-wrapper/async-wrapper.component';



@NgModule({
  declarations: [PreviewComponent, LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent, AsyncWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [PreviewComponent, LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent, AsyncWrapperComponent]
})
export class SharedModule { }
