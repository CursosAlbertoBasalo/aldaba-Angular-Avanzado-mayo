import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";
import { LabsRoutingModule } from "./labs-routing.module";
import { LabsComponent } from "./labs.component";
import { WeightAbstractService } from "./weight-abstract.service";
import { WeightImperialService } from "./weight-imperial.service";
import { WeightMetricService } from "./weight-metric.service";

@NgModule({
  declarations: [LabsComponent],
  imports: [CommonModule, LabsRoutingModule],
  providers: [
    // WeightAbstractService,
    // { provide: WeightAbstractService, useClass: WeightAbstractService },
    // { provide: WeightAbstractService, useValue: new WeightAbstractService() },
    // {
    //   provide: WeightAbstractService,
    //   useValue: {
    //     getWeight: (x) => x + " k",
    //   },
    // },
    // {
    //   provide: WeightAbstractService,
    //   useFactory: () => {
    //     return new WeightAbstractService();
    //   },
    // },
    // { provide: WeightAbstractService, useClass: WeightMetricService },
    // { provide: WeightAbstractService, useValue: new WeightImperialService() },
    {
      provide: WeightAbstractService,
      useFactory: () => {
        if (environment.units == "metric") return new WeightMetricService();
        else return new WeightImperialService();
      },
    },
  ],
})
export class LabsModule {}
