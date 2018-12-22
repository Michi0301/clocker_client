import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Settings } from '../../models/settings';


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})

export class SettingsPage {
  private settings: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.settings = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      server: ['', Validators.required]
    });

    if (Settings.present()) this.loadSettings();
  }

  saveSettings() {
    let settings = new Settings(
      this.settings.value.username, 
      this.settings.value.password,
      this.settings.value.server
    );

    settings.save();
  }

  private loadSettings() {
    this.settings.setValue({
      username: Settings.get('username'),
      password: Settings.get('password'),
      server: Settings.get('server')
    });
  }
}
