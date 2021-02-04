import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }

}
