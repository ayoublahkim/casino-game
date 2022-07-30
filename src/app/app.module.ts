import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BusyConfig, NgBusyModule} from 'ng-busy';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SharedModule} from "./shared/shared.module";

import {LoaderComponent} from "./layouts/loader/loader.component";
import {SpinnerComponent} from "./layouts/spinner/spinner.component";
import {LandingComponent} from "./components/landing/landing.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MemoizePipe} from "./pipes/memoize.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import { GameService } from './services/game.service';
import {HttpClientModule} from "@angular/common/http";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {PrimengModule} from "./primeng/primeng.module";
import {EnumToArrayPipe} from "./shared/pipes/enum.pipe";
import {CustomBusyComponent} from "./components/ng-busy/CustomBusyComponent";
import {GameComponent} from "./components/game/game.component";
import {JackPotService} from "./services/jackpot.service";
import { CurrencyPipe } from '@angular/common';

export function busyConfigFactory() {
  return new BusyConfig({template: CustomBusyComponent});
}


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SpinnerComponent,
    LandingComponent,
    MemoizePipe,
    TopbarComponent,
    EnumToArrayPipe,
    CustomBusyComponent,
    GameComponent
  ],
  imports: [
    PrimengModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBusyModule
  ],
  providers: [
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: [GameService,JackPotService, {
        provide: BusyConfig,
        useFactory: busyConfigFactory
      }]
    };
  }
}
