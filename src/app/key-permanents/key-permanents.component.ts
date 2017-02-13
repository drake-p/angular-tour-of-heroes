import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { CardService } from './../card/card.service';
import { Card } from './../card/card';

@Component({
  selector: 'key-permanents',
  template: `
  <div *ngIf="keyPermanents.length" class="py-2">
    <h6>Key Permanents <small>(cards with letters that appear only once)</small>:</h6>
    <ul class="list-unstyled text-capitalize">
      <li *ngFor="let card of keyPermanents">{{card.name}}</li>
    </ul>
  </div>
  `
})

export class KeyPermanentsComponent implements OnInit {
  constructor(private cardService: CardService) { };

  keyPermanents: Card[] = [];

  getKeyPermanents(): void {
    this.keyPermanents = this.cardService.getKeyPermanents();
  };

  ngOnInit(): void {
    this.cardService.subscribe(() => { this.getKeyPermanents() });
  }
}
