import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWordartModule } from 'angular-wordart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularWordartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
