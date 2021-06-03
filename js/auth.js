var submitfrm = (e) => {
var signup;
   signup = {
         email: e.form.childNodes[1].id == "email"  ? e.form.childNodes[1].value : '',
         password: e.form.childNodes[3].id == "password"  ? e.form.childNodes[3].value : ''
 }

    firebase.auth().createUserWithEmailAndPassword(signup.email, signup.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

var submitSignIn = (e) => {
    var signIn;
       signIn = {
             email: e.form.childNodes[1].id == "email"  ? e.form.childNodes[1].value : '',
             password: e.form.childNodes[3].id == "password"  ? e.form.childNodes[3].value : ''
     }
     firebase.auth().signInWithEmailAndPassword(signIn.email, signIn.password)
     .then((userCredential) => {
       // Signed in
       var user = userCredential.user;
       if(user.email != ""){
          window.location.href = "./firebase.html";
       }
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorMessage);
     });

    }

