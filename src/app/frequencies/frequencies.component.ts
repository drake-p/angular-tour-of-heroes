import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { CardService } from './../card/card.service';

const TEXT_YES = 'Yes, you do!';
const TEXT_NO = 'Not quite yet!';

@Component({
  selector: 'analyzed-output',
  template: `
  <div *ngIf="cardService.win !== undefined" class="py-2">
    <h2 [class.text-success]="cardService.win">
      {{cardService.win ? text_yes : text_no}}
      <small *ngIf="frequencies[0].length">
        You still need {{frequencies[0].length / 2}} more letters:
        <div class="text-danger py-1">{{frequencies[0]}}</div>
      </small>
    </h2>

    <h3 *ngIf="frequencies[1].length" class="pt-2">
      You only have 1 of each of these letters:
      <br>
      <small class="text-warning">{{frequencies[1]}}</small>
    </h3>
    <small class="text-muted">Card names with unique letters are marked with an asterisk (*).</small>
  </div>
  `
})

export class FrequenciesComponent implements OnInit {
  constructor(private cardService: CardService) { };

  text_yes = TEXT_YES;
  text_no = TEXT_NO;

  frequencies: string[] = [];

  getFrequencies(): void {
    this.frequencies = this.cardService.getFrequencies();
  };
  ngOnInit(): void {
    this.cardService.subscribe(() => { this.getFrequencies() });
  }
}
