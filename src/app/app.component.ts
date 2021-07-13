import {Component, Injector, OnInit} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {HeroProfileComponent} from './hero-profile.component';
import {HeroService} from './hero.service';
import {AdItem} from './ad-item';
import {PopupService} from './popup.service';
import {PopupComponent} from './popup/popup.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ads!: AdItem[];
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService, injector: Injector, public popup: PopupService,  public router: Router) {

    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.ads = heroes.map(item => {
        return new AdItem(HeroProfileComponent, {name: item.name, bio: item.id});
      }));
  }
}

