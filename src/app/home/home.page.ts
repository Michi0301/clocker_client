import { Component, OnInit } from '@angular/core';
import { ClockerClient } from '../models/clockerClient'
import { ClockState } from '../models/clockState';
import { Settings } from '../models/settings';
import { Router } from '@angular/router'
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  clockState: ClockState;

  constructor(private clocker_client: ClockerClient, private router: Router, private afMessaging: AngularFireMessaging) {
    this.clockState = new ClockState('Pull to refresh');
  };

  ngOnInit() {
    // Redirect to settings page if no settings are present
    if (!Settings.present()) {
      this.router.navigate(['/settings']);
    } else {
      if (Settings.get('autoFetch')) this.fetchCurrent();
    }

    this.afMessaging.messages.subscribe((message: any) => {
        this.clockState = new ClockState(message.data.current_status);
       }
    );
  }

  private setLoadingState() {
    this.clockState = new ClockState('Awaiting response...');
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
