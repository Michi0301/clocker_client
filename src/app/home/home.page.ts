import { Component, OnInit } from '@angular/core';
import { ClockerClient } from '../models/clocker-client'
import { ClockState } from '../models/clock-state';
import { Settings } from '../models/settings';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  clockState: ClockState;

  constructor(private clocker_client: ClockerClient, private router: Router) {};

  ngOnInit() {
    // Redirect to settings page if no settings are present
    if (!Settings.present()) {
      this.router.navigate(['/settings']);
    } else {
      this.fetchCurrent();
    }
  }

  private setLoadingState() {
    this.clockState = new ClockState('loading');
  }

  doRefresh(event) {
    this.setLoadingState();

    this.clocker_client.getCurrentState().subscribe((clockState) => {
      this.clockState = clockState;
      event.target.complete();
    });
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
