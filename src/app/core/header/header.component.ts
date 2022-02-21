import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BookingsService } from "../bookings.service";
import { LoginService } from "../login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public title = "aldaba angular intro";
  public bookingsCount: number = 0;
  // public isLoggedIn: boolean;
  public isLoggedIn$: Observable<boolean>;

  constructor(private bookingsService: BookingsService, private loginService: LoginService) {
    this.bookingsCount = this.bookingsService.bookings.length;
    //this.isLoggedIn = this.loginService.isLoggedIn;
    this.isLoggedIn$ = this.loginService.isLoggedIn$;
  }

  ngOnInit(): void {}
}
