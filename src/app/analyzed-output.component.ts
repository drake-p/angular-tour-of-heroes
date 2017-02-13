import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { CardService } from './card.service';

@Component({
  selector: 'analyzed-output',
  template: `
  <div>
    <h2>You aren't quite there yet.</h2>
    <table class="table table-bordered table-sm">
      <tbody>
        <tr *ngFor="let freq of frequencies"
          [class.table-danger]="freq.label === '0'"
          >
          <th>{{freq.label}}</th>
          <td>{{freq.letters}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})

export class AnalyzedOutputComponent implements OnInit {
  constructor(private cardService: CardService) { };
  frequencies: Object[] = [];

  getFrequencies(): void {
    this.frequencies = this.cardService.getFrequencies();
  };
  ngOnInit(): void {
    this.cardService.subscribe(() => { this.getFrequencies() });
  }
}
