import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Settings } from '../models/settings';
import { PushToken } from '../models/pushToken';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AngularFireMessaging } from '@angular/fire/messaging';


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})

export class SettingsPage implements OnInit {
  public settings: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private afMessaging: AngularFireMessaging) {
    this.settings = this.formBuilder.group({
      username: [Settings.get('username'), Validators.required],
      password: [Settings.get('password'), Validators.required],
      server: [Settings.get('server') || environment.apiBackend, Validators.required],
      autoFetch: [Settings.get('autoFetch'), Validators.required],
      useAsyncApi: [Settings.get('useAsyncApi'), Validators.required]
    });
  }

  saveSettings() {
    let settings = new Settings({
      username: this.settings.value.username,
      password: this.settings.value.password,
      server: this.settings.value.server,
      autoFetch: this.settings.value.autoFetch,
      useAsyncApi: this.settings.value.useAsyncApi
    });

    settings.save();
    this.router.navigate(['/']);
  }

  requestPushNotificationsPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token) => {
          PushToken.save(token);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  ngOnInit() {
    if (!PushToken.present()) this.requestPushNotificationsPermission();
  }
}
