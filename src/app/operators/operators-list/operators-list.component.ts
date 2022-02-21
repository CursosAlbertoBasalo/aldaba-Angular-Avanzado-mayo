import { Component, Input, OnInit } from "@angular/core";
import { Operator } from "src/app/models/operator";
import { OperatorPresenterService } from "../operator-presenter.service";

@Component({
  selector: "app-operators-list",
  templateUrl: "./operators-list.component.html",
  styleUrls: ["./operators-list.component.css"],
})
export class OperatorsListComponent implements OnInit {
  @Input()
  public operators: Operator[];

  constructor(private operatorPresenterService: OperatorPresenterService) {}

  ngOnInit(): void {}
  public getOperatorClass(operator: Operator): string {
    return this.operatorPresenterService.getOperatorClass(operator);
  }
  public getOperatorIcon(operator: Operator): string {
    return this.operatorPresenterService.getOperatorIcon(operator);
  }
}
