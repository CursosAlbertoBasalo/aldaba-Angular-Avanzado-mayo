import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Operator } from "../models/operator";
import { OperatorsService } from "./operators.service";
@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html",
  styleUrls: ["./operators.component.css"],
})
export class OperatorsComponent implements OnInit {
  //public operators: Operator[];
  public operators$: Observable<Operator[]>;
  public range = "";

  constructor(private operatorsService: OperatorsService) {
    //this.operators = this.operatorsService.getOperators();
    this.operators$ = this.operatorsService.getOperators$();
  }

  ngOnInit(): void {}

  public searchOperators(): void {
    this.operators$ = this.operatorsService
      .getOperators$()
      .pipe(map((operators) => operators.filter((operator) => String(operator.range) === this.range)));
  }
}
