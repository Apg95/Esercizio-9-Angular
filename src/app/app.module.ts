import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ShowCounterComponent } from './counter/show-counter/show-counter.component';
import { EditCounterComponent } from './counter/edit-counter/edit-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ShowCounterComponent,
    EditCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
