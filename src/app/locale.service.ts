import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  // Chose Locale From This Link
  // https://github.com/angular/angular/tree/master/packages/common/locales
  constructor() {
  }

  private $locale: string | undefined;

  set locale(value: string) {
    this.$locale = value;
  }

  get locale(): string {
    return this.$locale || 'en-US';
  }

  public registerCulture(culture: string) {
    if (!culture) {
      return;
    }
    switch (culture) {
      case 'en-uk': {
        this.$locale = 'en';
        console.log('Application Culture Set to English');
        break;
      }
      case 'zh-hk': {
        this.$locale = 'zh-Hant';
        console.log('Application Culture Set to Traditional Chinese');
        break;
      }
      case 'zh-cn': {
        this.$locale = 'zh-Hans';
        console.log('Application Culture Set to Simplified Chinese');
        break;
      }
      default: {
        this.$locale = 'en';
        console.log('Application Culture Set to English');
        break;
      }
    }
  }
}
