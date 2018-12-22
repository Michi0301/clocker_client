import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  private user_credentials: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.user_credentials = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logForm() {
    console.log(this.user_credentials.value)
  }
}
