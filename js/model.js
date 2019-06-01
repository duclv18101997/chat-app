const model = {};

model.loginUser = undefined;

model.creatNewUser = (firstName, lastName, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerResult) => {
      //update display name
      registerResult.user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
      //send vertify email
      registerResult.user.sendEmailVerification();
      window.alert('Register success, Please check your email');
      view.clearRegisterInfo();
    })
    .catch((error) => {
      console.log(error);
      window.alert(error.code);
    });

};

model.loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult) => {
      // check emailVerified
      if (loginResult.user.emailVerified) {
        // login success
        model.loginUser = {
          id: loginResult.user.id,
          displayName: loginResult.user.displayName,
          email: loginResult.user.email,
        };
        view.setActiveScreen('chatPage');
      } else {
        window.alert('This account is not activate. Please verify your email');
      }
    })
    .catch((error) => {
      console.log(error);
      window.alert(error.message);
    });
};

model.resetPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email)
    .then((resetResult) => {
      //send code to email
      window.alert(`Check your email to reset passeword`);
      view.setActiveScreen('loginPage');
    })
    .catch((error) => {
      window.alert(error.message);
    });
}

model.signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('profile');
  // provider.addScope('email');
  console.log('aaaaa');
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('pass');
    // ...
  }).catch((error) => {
    console.log(error.code);
    window.alert(error.message);
  });




}