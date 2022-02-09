import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AboutModule } from "./about/about.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactModule } from "./contact/contact.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
