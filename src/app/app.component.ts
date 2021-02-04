import { Component, OnInit } from '@angular/core';

import { HeroProfileComponent } from './hero-profile.component';
import { HeroService } from './hero.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ads!: AdItem[];
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.ads = heroes.map(item => {
        return new AdItem(HeroProfileComponent, { name: item.name, bio: item.id });
      }));
  }
}

