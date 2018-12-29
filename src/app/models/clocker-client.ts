import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './settings';
import { ClockState } from './clock-state'

@Injectable()
export class ClockerClient {
  constructor(private http: HttpClient) { 
  }

  params() {
    return {
      username: Settings.get('username'),
      password: Settings.get('password'),
      perform_sync: true
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

