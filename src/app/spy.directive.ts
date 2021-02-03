import {Directive, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from './message.service';

@Directive({selector: '[appSpy]'})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: MessageService) {
  }

  ngOnInit() {
    this.logIt(`onInit`);
  }

  ngOnDestroy() {
    this.logIt(`onDestroy`);
  }

  private logIt(msg: string) {
    this.logger.add(`Spy # ${msg}`);
  }
}
