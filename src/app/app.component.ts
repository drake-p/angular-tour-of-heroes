import { Component } from '@angular/core';
import { CardService } from './card/card.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <board-state></board-state>
    <analyzed-output></analyzed-output>
    <key-permanents></key-permanents>
    `,
})

export class AppComponent  {
  constructor(private cardService: CardService) { }
  title = 'Do You Know Your ABC\'s?';
}
