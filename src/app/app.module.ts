import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AdBannerComponent} from './ad-banner.component';
import {HeroProfileComponent} from './hero-profile.component';
import {AdDirective} from './ad.directive';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {SpyDirective} from './spy.directive';
import {HeroItemComponent} from './hero-item/hero-item.component';
import {PopupComponent} from './popup/popup.component';
import {HeroBirthdayComponent} from './pipe/component/hero-birthday.component';
import {HeroPipeComponent} from './pipe';
import {HeroBirthdayToggleComponent} from './pipe/component/hero-birthday-toggle.component';
import {ExponentialStrengthPipe} from './pipe/pipe/exponential-strength.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    SpyDirective,
    AdDirective,
    HeroProfileComponent,
    AdBannerComponent,
    HeroItemComponent,
    PopupComponent,
    HeroBirthdayComponent,
    HeroPipeComponent,
    HeroBirthdayToggleComponent,
    ExponentialStrengthPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
