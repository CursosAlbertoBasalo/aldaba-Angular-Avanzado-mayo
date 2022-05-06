import { Pipe, PipeTransform } from "@angular/core";
import { AgencyRange } from "src/app/api/models/agency-range.enum";

@Pipe({
  name: "agencyRange",
  pure: true,
})
export class AgencyRangePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case AgencyRange.Orbital:
        return "💫";
      default:
        return "🌠";
    }
  }
}
