import { Component } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <board-state class="py-4" style="display: block;"></board-state>
    <analyzed-output></analyzed-output>
    `,
})

export class AppComponent  {
  constructor(private cardService: CardService) { }
  title = 'Do You Know Your ABC\'s?';
}
