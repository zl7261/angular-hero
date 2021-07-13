import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `
    <p>The hero's birthday is {{ birthday | date }}</p>
    <p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>
    <p>
      The chained hero's birthday is
      {{ ( birthday | date:'fullDate' ) | uppercase | lowercase}}
    </p>
  `
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
