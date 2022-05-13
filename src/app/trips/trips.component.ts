import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Observable, pipe } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Trip } from "../api/models/trip.interface";
import { AgenciesService } from "../api/services/agencies.service";
import { TripsService } from "../api/services/trips.service";

@Component({
  selector: "app-trips",
  templateUrl: "./trips.component.html",
  styleUrls: ["./trips.component.css"],
})
export class TripsComponent implements OnInit {
  @ViewChild("searchInput", { static: true }) searchInput: ElementRef;

  searchInput$: Observable<string>;
  tripsResult$!: Observable<Trip[]>;
  allTrips: Trip[] = [];

  constructor(private readonly trips: TripsService, private readonly agencies: AgenciesService) {}

  miFn() {
    this.trips.getAll$();
  }

  ngOnInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, "keyup").pipe(
      map((event) => (event as any).target.value as string),
      tap((searchTerm) => console.log("PRE: " + searchTerm)),
      debounceTime(500),
      filter((text) => text.length > 2),
      distinctUntilChanged(),
      tap((searchTerm) => console.log(searchTerm)),
    );
    this.tripsResult$ = this.searchInput$.pipe(
      // map((searchTerm) => {
      //   return this.trips.getByText$(searchTerm);
      // }),
      switchMap((searchTerm) => {
        return this.trips.getByText$(searchTerm);
      }),
      // concatMap((searchTerm) => {
      //   return this.trips.getByText$(searchTerm);
      // }),
      // exhaustMap((searchTerm) => {
      //   return this.trips.getByText$(searchTerm);
      // }),
    );

    // const preguntas = [this.trips.getAll$(), this.agencies.getAll$()];
    // let respuestas: []; // = [,];
    // console.log(respuestas.length);
    // forkJoin(preguntas).subscribe({
    //   next: (data) => (respuestas = data),
    // });

    const sizeFilter = (text) => text.length > 2;

    const myPipe = pipe(
      map((event) => (event as any).target.value as string),
      tap((searchTerm) => console.log("PRE: " + searchTerm)),
      debounceTime(500),
      filter(sizeFilter),
      distinctUntilChanged(),
      tap((searchTerm) => console.log(searchTerm)),
    );
    fromEvent(this.searchInput.nativeElement, "keyup").pipe(myPipe);
  }
}
