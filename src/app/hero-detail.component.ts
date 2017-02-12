import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div class="form">
      <div class="form-group">
        <label>id</label>
        <input type="readonly" value="{{hero.id}}" class="form-control">
      </div>
      <div class="form-group">
        <label>name</label>
        <input [(ngModel)]="hero.name" placeholder="name" class="form-control">
      </div>
    </div>
  </div>`
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
