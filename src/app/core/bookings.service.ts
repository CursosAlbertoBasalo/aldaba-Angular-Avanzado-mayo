import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Booking } from "../models/booking";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  private bookings: Booking[] = [];
  private bookingsCount = new BehaviorSubject(0);
  public bookingsCount$ = this.bookingsCount.asObservable();

  constructor(private httpClient: HttpClient) {}

  public postBooking(booking: Booking) {
    console.log({ reserva: booking });
    this.bookings.push(booking);
    console.log({ lista: this.bookings });
    this.bookingsCount.next(this.bookings.length);
    console.log({ counter: this.bookings.length });
  }
  public postBooking$(booking: Booking): Observable<Booking> {
    console.log({ posting: booking });
    return this.httpClient
      .post<Booking>("http://localhost:3000/bookings", booking)
      .pipe(tap((savedBooking) => this.postBooking(savedBooking)));
  }
}
