// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw-z3LcKNCQLrzJeNsPf73SrCjemjgSTE",
    authDomain: "d9-902ab.firebaseapp.com",
    projectId: "d9-902ab",
    storageBucket: "d9-902ab.firebasestorage.app",
    messagingSenderId: "313463134110",
    appId: "1:313463134110:web:a2d79097cad2ccdfc3288f",
    measurementId: "G-G1PVZHR1MD"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Optional: a logo for the notification
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});