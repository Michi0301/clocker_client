// See https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4

importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArBlGG1yhkIPUC6DxWwpaMhZh7ojo-2Y8",
  authDomain: "clocker-client.firebaseapp.com",
  databaseURL: "https://clocker-client.firebaseio.com",
  projectId: "clocker-client",
  storageBucket: "clocker-client.appspot.com",
  messagingSenderId: "282924589880",
  appId: "1:282924589880:web:fd483d8810a854567817cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
