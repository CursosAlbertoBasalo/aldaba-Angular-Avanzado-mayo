import { Component, Input, OnInit } from "@angular/core";
import { Trip } from "src/app/api/models/trip.interface";

@Component({
  selector: "app-trips-list",
  templateUrl: "./trips.list.html",
  styleUrls: ["./trips.list.css"],
})
export class TripsList implements OnInit {
  @Input() trips: Trip[];
  constructor() {}

  ngOnInit(): void {}
}
