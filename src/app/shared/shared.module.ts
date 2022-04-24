import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {TranslateDirective} from "./directives/language/translate.directive";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    TranslateDirective,
  ],
  exports: [
    TranslateDirective,
  ],
  providers: []
})
export class SharedModule {
}
