import { Injectable } from '@angular/core';
import { Card } from './card';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const KEYS = {
  0: '0',
  1: '1',
  2: '2-4',
  3: '2-4',
  4: '2-4',
  5: '5+',
};

const CARDS: Card[] = [
  { id: 11, name: 'Island', types: ['land'] },
  { id: 12, name: 'Forest', types: ['land'] },
  { id: 13, name: 'Mountain', types: ['land'] },
  { id: 14, name: 'Plains', types: ['land'] },
  { id: 15, name: 'Swamp', types: ['land'] },
  { id: 16, name: 'Now I Know My ABC\'s', types: ['enchantment'] }
];

@Injectable()
export class CardService {
  cards = CARDS;
  // cards: Card[];

  frequencies: Object;

  getCards(): Card[] {
    return this.cards;
  };

  addCard(card: Card): void { };

  removeCard(card: Card): void {
    var index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
    this.frequencies = this.getFrequencies();
  };

  getFrequencies(): Object {
    let frequencies = {'0': '', '1': '', '2-4': '', '5+': ''};

    let letterCounts = this.getLetterCounts();
    for (let letter in letterCounts) {
      frequencies[KEYS[letterCounts[letter]] || KEYS[5]] += letter + ' ';
    };

    let transformed: Object[];
    transformed = [];

    for (let key in frequencies) {
      transformed.push({
        label: key,
        letters: frequencies[key]
      });
    }

    return transformed;
  }

  getLetterCounts(): Object {
    let letterCounts = {};

    Array.from(ALPHABET, (letter, i) => {
      letterCounts[letter] = 0;
    });

    this.getCards().forEach((card: Card) => {
      Array.from(card.name.toUpperCase()).forEach((letter: string) => {
        if (letterCounts[letter] != undefined) {
          letterCounts[letter]++;
        }
      });
    });

    return letterCounts;
  }
}
