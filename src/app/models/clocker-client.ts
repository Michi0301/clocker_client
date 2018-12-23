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
}

