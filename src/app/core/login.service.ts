import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { LoginCredentials } from "../models/loginCredentials";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  public isLoggedIn$: Observable<boolean>;
  private isLoggedIn: Subject<boolean>;

  constructor(private httpClient: HttpClient) {
    this.isLoggedIn = new Subject();
    this.isLoggedIn.next(false);
    this.isLoggedIn$ = this.isLoggedIn.asObservable();
  }

  public setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn);
  }

  public postCredentials(credentials: LoginCredentials): Observable<LoginCredentials> {
    return this.httpClient.post<LoginCredentials>("http://localhost:3000/login", credentials);
  }
}
