import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Settings } from '../models/settings';
import { Router } from '@angular/router'


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})

export class SettingsPage {
  public settings: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.settings = this.formBuilder.group({
      username: [Settings.get('username'), Validators.required],
      password: [Settings.get('password'), Validators.required],
      server: [Settings.get('server'), Validators.required],
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
}
