import { Component } from '@angular/core';
import { CardService } from './card/card.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <board-state></board-state>
    <analyzed-output></analyzed-output>
    <key-permanents></key-permanents>
    <small class="text-muted font-italic">Cards marked with a * contain a letter that appears only once.</small>
    `,
})

export class AppComponent  {
  constructor(private cardService: CardService) { }
  title = 'Do You Know Your ABC\'s?';
}
