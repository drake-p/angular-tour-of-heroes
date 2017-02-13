import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Card } from './card';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

@Injectable()
export class CardService {
  cards: Card[] = [];
  emitter: EventEmitter<any> = new EventEmitter();
  win: number;

  getCards(): Card[] {
    return this.cards;
  };

  addCard(cardName: string): void {
    this.cards.push(<Card>{id: 0, name: cardName, types: []});
    this.cards.sort((a, b) => {
      return a.name > b.name ? +1 : -1;
    });
    this.emitter.emit(null);
  };

  removeCard(card: Card): void {
    var index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
    this.emitter.emit(null);
  };

  subscribe(callback: any): void {
    this.emitter.subscribe(callback);
  }

  getKeyPermanents(): Card[] {
    let keyCards: Card[] = [];
    let keyLetters: string[] = [];

    let letterCounts = this.count();

    for (var letter in letterCounts) {
      if (letterCounts[letter] == 1) {
        keyLetters.push(letter);
      }
    }

    this.cards.forEach((card) => {
      card.unique = keyLetters.some((letter) => {
        return card.name.toUpperCase().includes(letter);
      });
    });

    return keyCards;
  }

  getFrequencies(): string[] {
    let frequencies: string[] = ['', ''];
    let letterCounts = this.count();

    // check whether we have all 26 letters
    this.win = this.isWin(letterCounts);

    // group letters by frequency
    for (let letter in letterCounts) {
      if (letterCounts[letter] <= 1) {
        frequencies[letterCounts[letter]] += letter + ' ';
      }
    };

    return frequencies;
  }

  count(): Object {
    let letterCounts = {};

    // make a hash like {A: 0, B: 0, C: 0, ...}
    Array.from(ALPHABET, (letter, i) => {
      letterCounts[letter] = 0;
    });

    // tally up the letters in each card name
    this.getCards().forEach((card: Card) => {
      Array.from(card.name.toUpperCase()).forEach((letter: string) => {

        // don't worry about non-alphabetic characters; they don't count
        if (letterCounts[letter] != undefined) {
          letterCounts[letter]++;
        }
      });
    });

    return letterCounts;
  }

  isWin(letterCounts: Object): number {
    for (let letter in letterCounts) {
      if (letterCounts[letter] == 0) {
        return 0;
      }
    }

    return 1;
  }
}
