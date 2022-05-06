import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AmazonComponent } from "./amazon.component";
import { AmazonGuard } from "./amazon.guard";
import { ComidaComponent } from "./components/comida/comida.component";
import { LibrosComponent } from "./components/libros/libros.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AmazonGuard],
    component: AmazonComponent,
    children: [
      {
        path: "libros",
        component: LibrosComponent,
      },
      {
        path: "comida",
        component: ComidaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmazonRoutingModule {}
