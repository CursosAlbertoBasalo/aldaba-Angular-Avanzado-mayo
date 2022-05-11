import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map, tap } from "rxjs/operators";
import { Trip } from "../api/models/trip.interface";

@Component({
  selector: "app-trips",
  templateUrl: "./trips.component.html",
  styleUrls: ["./trips.component.css"],
})
export class TripsComponent implements OnInit {
  @ViewChild("searchInput", { static: true }) searchInput: ElementRef;

  searchInput$: Observable<string>;
  tripsResult$!: Observable<Trip[]>;

  constructor() {}

  ngOnInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, "keyup").pipe(
      map((event) => (event as any).target.value),
      debounceTime(500),
      filter((text) => text.length > 2),
      distinctUntilChanged(),
      tap((searchTerm) => console.log(searchTerm)),
    );
    this.tripsResult$ = null;
  }
}
