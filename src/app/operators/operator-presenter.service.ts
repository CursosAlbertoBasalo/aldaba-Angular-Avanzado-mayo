import { Injectable } from "@angular/core";
import { Operator } from "src/app/models/operator";
import { OperatorRanges, OperatorStatus } from "../models/operator";

@Injectable({
  providedIn: "root",
})
export class OperatorPresenterService {
  constructor() {}
  public getOperatorClass(operator: Operator): string {
    const active = OperatorStatus[OperatorStatus.ACTIVE];
    return operator.status.toString() == active ? "active" : "pending";
  }
  public getOperatorIcon(operator: Operator): string {
    const orbital = OperatorRanges[OperatorRanges.ORBITAL];
    return operator.range.toString() == orbital ? "🌍" : "💫";
  }
}
