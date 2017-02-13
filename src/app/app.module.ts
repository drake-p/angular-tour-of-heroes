import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AnalyzedOutputComponent } from './analyzed-output.component';
import { BoardStateComponent } from './board-state.component';

import { CardService } from './card.service';

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
  bootstrap:    [ AppComponent ],
  providers: [ CardService ]
})
export class AppModule { }
