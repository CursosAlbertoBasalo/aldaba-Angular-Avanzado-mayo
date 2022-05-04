import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Agency } from "../api/models/agency.interface";
import { Trip } from "../api/models/trip.interface";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  agencies$: Observable<Agency[]>;
  trips$: Observable<Trip[]>;

  constructor(private readonly service: HomeService) {
    this.agencies$ = service.getAgencies$();
    this.trips$ = service.getTrips$();
  }

  ngOnInit(): void {}
}
