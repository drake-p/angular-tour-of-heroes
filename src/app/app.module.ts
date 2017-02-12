import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AnalyzedOutputComponent } from './analyzed-output.component';
import { BoardStateComponent } from './board-state.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AnalyzedOutputComponent,
    BoardStateComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
