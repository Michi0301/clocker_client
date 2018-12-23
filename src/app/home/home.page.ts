import { Component, OnInit } from '@angular/core';
import { ClockerClient } from '../models/clocker-client'
import { ClockState } from '../models/clock-state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  clockState: ClockState;

  constructor(private clocker_client: ClockerClient) {
    this.clockState = new ClockState('... loading ...');
  };

  ngOnInit() {
    this.clocker_client.getCurrentState().subscribe((clockState) => {
      this.clockState = clockState;

      console.log(clockState);
    });
  }
}
