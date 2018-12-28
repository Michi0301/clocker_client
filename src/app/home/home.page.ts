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

  private setLoadingState() {
    this.clockState = new ClockState('loading');
  }

  fetchCurrent() {
    this.setLoadingState();

    this.clocker_client.getCurrentState().subscribe((clockState) => {
      this.clockState = clockState;
    });
  }

  clockIn() {
    this.setLoadingState();

    this.clocker_client.clockIn().subscribe((clockState) => {
      this.clockState = clockState;
    
    });
  }

  clockOut() {
    this.setLoadingState();

    this.clocker_client.clockOut().subscribe((clockState) => {
      this.clockState = clockState;
    });
  }

  clockPause() {
    this.setLoadingState();

    this.clocker_client.clockPause().subscribe((clockState) => {
      this.clockState = clockState;
    });
  }
}
