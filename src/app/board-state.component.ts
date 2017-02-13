import { Component, Input } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'board-state',
  template: `
  <ul class="nav flex-column">
    <li>
        <!--<select name="cardName" placeholder="e.g. Island">
          <option>Island</option>
          <option>Plains</option>
          <option>Swamp</option>
          <option>Mountain</option>
          <option>Forest</option>
          <option>Now I Know My ABC's</option>
        </select>-->
        <input #cardName
          (keyup.enter)="addCard(cardName.value); cardName.value = ''"
          placeholder="Type a card name...">
        <button (click)="addCard(cardName.value); cardName.value=''">+</button>
    </li>
    <li *ngFor="let card of getCards()" class="nav-item">
      <button (click)="removeCard(card)">&times;</button>
      {{card.name}}
      <span *ngFor="let type of card.types" class="badge badge-default">{{type}}</span>
    </li>
    <li class="text-muted" hidden>Cast some spells! Don't forget - lands count too!</li>
  </ul>
  <!--Remove All: <button>Creatures</button> <button>Enchantments</button> <button>Artifacts</button> <button>Lands</button> <button>Planeswalkers</button> <br>
  <button>Remove Everything :(</button>-->
  `,
})

export class BoardStateComponent {
  constructor(private cardService: CardService) { }
  getCards(): Card[] {
    return this.cardService.getCards();
  };
  addCard(cardName: string): void {
    if (cardName) {
      this.cardService.addCard(cardName);
    }
  };
  removeCard(card: Card): void {
    this.cardService.removeCard(card);
  };
}
