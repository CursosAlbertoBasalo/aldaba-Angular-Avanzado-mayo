import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"],
})
export class ErrorComponent implements OnInit {
  @Input() public dataName = "";
  @Input() public error = "";
  constructor() {}

  ngOnInit(): void {}
}
