import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './settings';
import { ClockState } from './clock-state'

@Injectable()
export class ClockerClient {
  static readonly credentials = {
    username: Settings.get('username'), password: Settings.get('password')
  };

  constructor(private http: HttpClient) { 
  }

  getCurrentState() {
    return this.http.post<ClockState>(Settings.get('server') + "/current", ClockerClient.credentials)
  }

  clockIn() {
    return this.http.post<ClockState>(Settings.get('server') + "/clockin", ClockerClient.credentials)
  }

  clockOut() {
    return this.http.post<ClockState>(Settings.get('server') + "/clockout", ClockerClient.credentials)
  }

  clockPause() {
    return this.http.post<ClockState>(Settings.get('server') + "/pause", ClockerClient.credentials)
  }
}

