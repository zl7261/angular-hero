import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-pipe',
  template: `<a id="toc"></a>
  <h1>Pipes</h1>
  <a href="#happy-birthday1">Happy Birthday v1</a><br>
  <a href="#birthday-date-pipe">Birthday DatePipe</a><br>
  <a href="#happy-birthday2">Happy Birthday v2</a><br>
  <a href="#birthday-pipe-chaining">Birthday Pipe Chaining</a><br>
  <a href="#power-booster">Power Booster custom pipe</a><br>
  <a href="#power-boost-calc">Power Boost Calculator custom pipe with params</a><br>
  <a href="#flying-heroes">Flying Heroes filter pipe (pure)</a><br>
  <a href="#flying-heroes-impure">Flying Heroes filter pipe (impure)</a><br>
  <a href="#hero-message">Async Hero Message and AsyncPipe</a><br>
  <a href="#hero-list">Hero List with caching FetchJsonPipe</a><br>
  <a href="#pipe-precedence">Pipes and Precedence</a><br>


  <hr>
  <a id="happy-birthday1"></a>
  <h2>Hero Birthday v1</h2>
  <app-hero-birthday></app-hero-birthday>
  <app-hero-birthday-toggle></app-hero-birthday-toggle>
  <hr>
  <div>current pow: <input [(ngModel)]="pow"></div>
  <p>ExponentialStrengthPipe: {{2 | exponentialStrength: pow}}</p>

  <button (click)="increase()">increase</button>
  <button (click)="decrease()">decrease</button>
  <button [disabled]="pow>5">Save</button>

  `
})
export class HeroPipeComponent implements OnInit {

  constructor() {
  }

  pow = 1;

  ngOnInit(): void {
  }

  increase() {
    this.pow++;
  }

  decrease() {
    this.pow--;
  }
}
