import { Component, Input } from '@angular/core';
import { Card } from './../card/card';
import { CardService } from './../card/card.service';

@Component({
  selector: 'board-state',
  template: `
    <div class="input-group input-group-lg pb-3">
      <input #cardName
        (keyup.enter)="addCard(cardName.value); cardName.value = ''"
        placeholder="Type a card name, e.g. 'Island'..."
        class="form-control">
      <button
        (click)="addCard(cardName.value); cardName.value=''"
        class="input-group-addon">+</button>
    </div>
    <div *ngIf="getCards().length">
      <ul class="list-unstyled text-capitalize">
        <li *ngFor="let card of getCards()" class="pb-1">
          <button
            (click)="removeCard(card)"
            class="btn btn-sm btn-outline-danger">&times;</button>
          {{card.name}}
          {{card.unique ? '*' : ''}}
          <span *ngFor="let type of card.types" class="badge badge-default">{{type}}</span>
        </li>
        <li class="text-muted" hidden>Cast some spells! Don't forget - lands count too!</li>
      </ul>

      <div class="pb-3" hidden>
        <div class="form-group">
          <label class="control-label">Remove All:</label><br>
          <div class="btn-group">
            <button class="btn btn-secondary">Creatures</button>
            <button class="btn btn-secondary">Enchantments</button>
            <button class="btn btn-secondary">Artifacts</button>
            <button class="btn btn-secondary">Lands</button>
            <button class="btn btn-secondary">Planeswalkers</button>
          </div>
        </div>
      </div>
    </div>
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
