import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InjectionToken, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ACañizaInterceptor } from "./error.interceptor";
import { LoggerService } from "./logger.service";

export const APP_VERSION = new InjectionToken<string>("appVersion");
export const ONLY_ERRORS = new InjectionToken<boolean>("onlyErrors");

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: LoggerService, useClass: LoggerService },
    { provide: APP_VERSION, useValue: "2.0.0" },
    { provide: ONLY_ERRORS, useValue: false },
    // { provide: HTTP_INTERCEPTOR, useClass: ACañizaInterceptor },
    { provide: HTTP_INTERCEPTORS, useClass: ACañizaInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(logger: LoggerService) {
    logger.log("CoreModule created", {});
    logger.warn("CoreModule created", { warning: true });
    logger.error("CoreModule ERROR", new Error("Fake Error"));
  }
}
