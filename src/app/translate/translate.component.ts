import {Component, OnInit} from '@angular/core';
import {LocaleService} from '../locale.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }

  male() {
    this.gender = 'male';
  }

  female() {
    this.gender = 'female';
  }

  other() {
    this.gender = 'other';
  }

  constructor(private localeService: LocaleService) {
  }

  ngOnInit(): void {
  }

  switchLocale(lang: string) {
    console.log('fr');
    console.log(this.localeService.locale);
    this.localeService.locale = lang;
    console.log(this.localeService.locale);
    window.location.reload(true);
  }
}
