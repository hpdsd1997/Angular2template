import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import {FormsModule} from '@angular/forms'
import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
