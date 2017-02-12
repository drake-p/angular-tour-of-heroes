import { Component } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <board-state></board-state>
    <analyzed-output></analyzed-output>
    `,
    providers: [CardService]
})

export class AppComponent  {
  constructor(private cardService: CardService) { }
  title = 'Do You Know Your ABC\'s?';
}
