import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

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
  api$: Observable<Api>;

  @Input() dataTemplate: TemplateRef<HTMLElement>;
  @Input() dataName = "";
  @Input() set http$(value$: Observable<unknown[]>) {
    this.api$ = value$.pipe(
      map((response) => ({ data: response, error: null })),
      catchError((exception) => of({ data: null, error: exception.message })),
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
