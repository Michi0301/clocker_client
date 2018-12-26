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

  constructor(private clocker_client: ClockerClient) {};

  ngOnInit() {
    this.fetchCurrent();
  }

  fetchCurrent() {
    this.clockState = new ClockState('loading');

    this.clocker_client.getCurrentState().subscribe((clockState) => {
      this.clockState = clockState;

      console.log(clockState);
    });
  }

  clockIn() {
    this.clocker_client.clockIn().subscribe((result) => {
      
      this.fetchCurrent();
      console.log(result);
    });
  }

  clockOut() {
    this.clocker_client.clockOut().subscribe((result) => {

      this.fetchCurrent();
      console.log(result);
    });
  }

  clockPause() {
    this.clocker_client.clockPause().subscribe((result) => {

      this.fetchCurrent();
      console.log(result);
    });
  }
}
