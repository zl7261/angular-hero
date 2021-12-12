import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-pipe',
  templateUrl: './common-pipe.component.html',
  styleUrls: ['./common-pipe.component.scss']
})
export class CommonPipeComponent implements OnInit {
  object = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  constructor() {
  }

  ngOnInit(): void {
  }

}
