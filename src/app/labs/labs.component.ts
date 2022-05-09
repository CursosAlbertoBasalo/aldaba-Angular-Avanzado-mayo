import { Component, OnInit } from "@angular/core";
import { WeightAbstractService } from "./weight-abstract.service";

@Component({
  selector: "app-labs",
  templateUrl: "./labs.component.html",
  styleUrls: ["./labs.component.css"],
})
export class LabsComponent implements OnInit {
  weightWithUnits = this.weights.getWeight(15);

  constructor(private weights: WeightAbstractService) {}

  ngOnInit(): void {}
}
