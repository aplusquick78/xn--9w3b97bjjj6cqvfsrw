// firebase.js (Firebase 초기화 설정)

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyCF5_cc0paF2mVyTJJgydM6mIlJ8fyTFk0",
  authDomain: "ansanblog-f6f70.firebaseapp.com",
  projectId: "ansanblog-f6f70",
  storageBucket: "ansanblog-f6f70.appspot.com",
  messagingSenderId: "110640213174",
  appId: "1:110640213174:web:099444fe5c3f0968514a17",
  measurementId: "G-7JBX3TE2R3"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
