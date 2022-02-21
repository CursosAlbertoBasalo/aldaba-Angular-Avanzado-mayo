import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "stream";

@Component({
  selector: "app-operators-search",
  templateUrl: "./operators-search.component.html",
  styleUrls: ["./operators-search.component.css"],
})
export class OperatorsSearchComponent implements OnInit {
  public range = "";
  @Output()
  public searchRange: EventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public searchOperators(): void {
    this.searchRange.emit(this.range);
  }
}
