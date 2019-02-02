// See https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '282924589880'
});

const messaging = firebase.messaging();
