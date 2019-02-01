import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './settings';
import { PushToken } from './pushToken';
import { ClockState } from './clockState'

@Injectable()
export class ClockerClient {
  constructor(private http: HttpClient) {
  }

  params() {
    return {
      username: Settings.get('username'),
      password: Settings.get('password'),
      perform_sync: !Settings.get('useAsyncApi'),
      push_token: PushToken.get()
    };
  }

  getCurrentState() {
    return this.http.post<ClockState>(Settings.get('server') + "/current", this.params())
  }

  clockIn() {
    return this.http.post<ClockState>(Settings.get('server') + "/clockin", this.params())
  }

  clockOut() {
    return this.http.post<ClockState>(Settings.get('server') + "/clockout", this.params())
  }

  clockPause() {
    return this.http.post<ClockState>(Settings.get('server') + "/pause", this.params())
  }
}

