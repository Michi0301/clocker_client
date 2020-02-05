import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

const FIREBASE_PUBLIC_VAPID_KEY = 'BNuqePVbeKJA4JUkzMPq0X1qgc11noBm6CYeTwetQ3BMcv3d2GH-XzB-96X1_0S5BkwS8RtjIC93LI88MtiCcLA';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

const messaging = firebase.messaging();
messaging.usePublicVapidKey(FIREBASE_PUBLIC_VAPID_KEY);
