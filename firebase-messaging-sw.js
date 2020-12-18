// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// });

var firebaseConfig = {
  apiKey: "AIzaSyB3ISNhVo78qbczQgPAbjXPnd1_wXjDajk",
  authDomain: "my-awesome-project-d1169.firebaseapp.com",
  databaseURL: "https://my-awesome-project-d1169.firebaseio.com",
  projectId: "my-awesome-project-d1169",
  storageBucket: "my-awesome-project-d1169.appspot.com",
  messagingSenderId: "50967587199",
  appId: "1:50967587199:web:f3e5444b4908d29fc8124a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();