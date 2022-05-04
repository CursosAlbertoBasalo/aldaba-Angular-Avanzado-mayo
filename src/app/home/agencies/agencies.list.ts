import { Component, Input, OnInit } from "@angular/core";
import { Agency } from "src/app/api/models/agency.interface";

@Component({
  selector: "app-agencies-list",
  templateUrl: "./agencies.list.html",
  styleUrls: ["./agencies.list.css"],
})
export class AgenciesList implements OnInit {
  @Input() agencies: Agency[];
  constructor() {}

  ngOnInit(): void {}
}
