import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Trip } from "../api/models/trip.interface";
import { HomeService } from "./home.service";

type Api = {
  data?: unknown[];
  error?: string;
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  agencies$: Observable<Api>;
  trips$: Observable<Trip[]>;

  constructor(private readonly service: HomeService) {
    this.agencies$ = service.getAgencies$().pipe(
      map((response) => ({ data: response, error: null })),
      catchError((exception) => of({ data: null, error: exception.message })),
    );
    this.trips$ = service.getTrips$();
  }

  ngOnInit(): void {}
}
