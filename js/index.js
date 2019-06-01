window.onload = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDc9ZMT2T-m6Neq354rP-EEVIlzByRRetE",
    authDomain: "ci-21-85953.firebaseapp.com",
    databaseURL: "https://ci-21-85953.firebaseio.com",
    projectId: "ci-21-85953",
    storageBucket: "ci-21-85953.appspot.com",
    messagingSenderId: "33161957034",
    appId: "1:33161957034:web:07cb4dfbf4db3e7d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
    // show welcomeScreen
    view.setActiveScreen('loginPage');
  };