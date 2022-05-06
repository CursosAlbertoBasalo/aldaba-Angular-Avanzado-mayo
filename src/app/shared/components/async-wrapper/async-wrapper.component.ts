import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";

type Api = {
  data?: unknown[];
  error?: string;
};

@Component({
  selector: "app-async-wrapper",
  templateUrl: "./async-wrapper.component.html",
  styleUrls: ["./async-wrapper.component.css"],
})
export class AsyncWrapperComponent implements OnInit {
  @Input() dataName = "";
  api$: Observable<Api>;
  constructor() {}

  ngOnInit(): void {}
}
