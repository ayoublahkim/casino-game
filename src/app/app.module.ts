import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SharedModule} from "./shared/shared.module";

import {LoaderComponent} from "./layouts/loader/loader.component";
import {SpinnerComponent} from "./layouts/spinner/spinner.component";

import {LandingComponent} from "./components/landing/landing.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoryComponent} from "./components/story/story.component";
import {FeedComponent} from "./components/feed/feed.component";
import {SuggestionComponent} from "./components/suggestion/suggestion.component";
import {LikeService} from "./services/like.service";
import {MemoizePipe} from "./pipes/memoize.pipe";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SpinnerComponent,
    LandingComponent,
    FeedComponent,
    MemoizePipe,
    SuggestionComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    LikeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
