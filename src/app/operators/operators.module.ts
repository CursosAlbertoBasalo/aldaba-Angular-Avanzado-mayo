import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OperatorsRoutingModule } from "./operators-routing.module";
import { OperatorsComponent } from "./operators.component";
import { OperatorsListComponent } from './operators-list/operators-list.component';
import { OperatorsSearchComponent } from './operators-search/operators-search.component';

@NgModule({
  declarations: [OperatorsComponent, OperatorsListComponent, OperatorsSearchComponent],
  imports: [CommonModule, OperatorsRoutingModule, FormsModule],
})
export class OperatorsModule {}
