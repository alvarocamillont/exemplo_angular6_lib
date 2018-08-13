import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ExemploNg6LibModule } from "exemplo-ng6-lib";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExemploNg6LibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
