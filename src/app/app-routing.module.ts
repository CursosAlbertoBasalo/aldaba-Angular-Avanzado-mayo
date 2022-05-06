import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AmazonGuard } from "./amazon/amazon.guard";

const routes: Routes = [
  { path: "", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
  {
    path: "amazon",
    canLoad: [AmazonGuard],
    loadChildren: () => import("./amazon/amazon.module").then((m) => m.AmazonModule),
  },
  { path: "zara", loadChildren: () => import("./zara/zara.module").then((m) => m.ZaraModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
