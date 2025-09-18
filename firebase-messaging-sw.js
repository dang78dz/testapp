// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js");

// Firebase config (giống index.html)
const firebaseConfig = {
  apiKey: "AIzaSyBw-z3LcKNCQLrzJeNsPf73SrCjemjgSTE",
  authDomain: "d9-902ab.firebaseapp.com",
  projectId: "d9-902ab",
  storageBucket: "d9-902ab.firebasestorage.app",
  messagingSenderId: "313463134110",
  appId: "1:313463134110:web:a2d79097cad2ccdfc3288f",
  measurementId: "G-G1PVZHR1MD"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Xử lý khi nhận thông báo ở background
messaging.onBackgroundMessage((payload) => {
  console.log("Thông báo background:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png" // có thể thay icon của lớp
  });
});
