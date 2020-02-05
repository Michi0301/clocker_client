// See https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const PUBLIC_VAPID_KEY = 'BNuqePVbeKJA4JUkzMPq0X1qgc11noBm6CYeTwetQ3BMcv3d2GH-XzB-96X1_0S5BkwS8RtjIC93LI88MtiCcLA';
const SENDER_ID = '282924589880';

firebase.initializeApp({
  'messagingSenderId': SENDER_ID
});

const messaging = firebase.messaging();
messaging.usePublicVapidKey(PUBLIC_VAPID_KEY);
