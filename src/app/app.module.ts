import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BoardStateComponent } from './board-state/board-state.component';
import { FrequenciesComponent } from './frequencies/frequencies.component';
import { KeyPermanentsComponent } from './key-permanents/key-permanents.component';

import { CardService } from './card/card.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BoardStateComponent,
    FrequenciesComponent,
    KeyPermanentsComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ CardService ]
})
export class AppModule { }
