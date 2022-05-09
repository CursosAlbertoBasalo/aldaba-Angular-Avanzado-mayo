import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoggerService } from "./logger.service";

@Injectable()
export class ACañizaInterceptor implements HttpInterceptor {
  constructor(private logger: LoggerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.logger.warn(request.url, request.headers);
    return next.handle(request).pipe(
      catchError((error) => {
        this.logger.error(request.url, error.message);
        return of(null);
      }),
    );
  }
}

// export const HTTP_INTERCEPTOR = new InjectionToken<HttpInterceptor>("httpInterceptor");

// export class HttpClient {
//   constructor(@Inject(HTTP_INTERCEPTOR) private interceptor: HttpInterceptor) {}

//   get(url: string): Observable<unknown> {
//     //this.interceptor.intercept();
//     return of(null);
//   }
// }

// export class Clientes {
//   constructor(private http: HttpClient) {}

//   getClientes() {
//     return this.http.get("/clientes");
//   }
// }
