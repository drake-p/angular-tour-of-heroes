import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { CardService } from './../card/card.service';

const TEXT_YES = 'Yes, you do!';
const TEXT_NO = 'Not quite yet!';

@Component({
  selector: 'analyzed-output',
  template: `
  <div class="py-2">
    <h2 *ngIf="cardService.win !== undefined">
      {{cardService.win ? text_yes : text_no}}
      <small *ngIf="!cardService.win">
        You still need {{frequencies[0].letters.length / 2}} more letters:
      </small>
    </h2>
    <table class="table table-bordered table-sm">
      <tbody>
        <tr *ngFor="let freq of frequencies"
          [class.text-danger]="freq.label === '0'"
          [class.text-success]="cardService.win"
          >
          <th>{{freq.label}}</th>
          <td>{{freq.letters}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})

export class FrequenciesComponent implements OnInit {
  constructor(private cardService: CardService) { };

  text_yes = TEXT_YES;
  text_no = TEXT_NO;

  frequencies: Object[] = [];

  getFrequencies(): void {
    this.frequencies = this.cardService.getFrequencies();
  };
  ngOnInit(): void {
    this.cardService.subscribe(() => { this.getFrequencies() });
  }
}
