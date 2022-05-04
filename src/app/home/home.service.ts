import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { Agency } from "../api/models/agency.interface";
import { Trip } from "../api/models/trip.interface";
import { AgenciesService } from "../api/services/agencies.service";
import { TripsService } from "../api/services/trips.service";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private readonly agencies: AgenciesService, private readonly trips: TripsService) {}

  getAgencies$(): Observable<Agency[]> {
    // return this.agencies.getAll$();
    return this.agencies.getAll$().pipe(delay(5000));
    // return this.agencies.getError$();
  }
  getTrips$(): Observable<Trip[]> {
    return this.trips.getAll$();
  }
}
