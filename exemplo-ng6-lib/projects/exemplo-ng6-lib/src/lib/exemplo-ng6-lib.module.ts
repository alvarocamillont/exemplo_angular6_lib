import { NgModule } from "@angular/core";
import { ExemploNg6LibComponent } from "./exemplo-ng6-lib.component";
import { FooComponent } from "./foo/foo.component";

@NgModule({
  imports: [],
  declarations: [ExemploNg6LibComponent, FooComponent],
  exports: [ExemploNg6LibComponent, FooComponent]
})
export class ExemploNg6LibModule {}
