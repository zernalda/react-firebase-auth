import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBbRtlRkyx-l9HEV2CMaKCM2d3DSDBQ0eo",
    authDomain: "login-672d7.firebaseapp.com",
    databaseURL: "https://login-672d7.firebaseio.com",
    projectId: "login-672d7",
    storageBucket: "login-672d7.appspot.com",
    messagingSenderId: "557665256994",
    appId: "1:557665256994:web:0e4900b29597a8c939ac7b"
};
  // Initialize Firebase
const Fire =  firebase.initializeApp(firebaseConfig);

export default Fire;
