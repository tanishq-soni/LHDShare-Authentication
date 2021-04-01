document.getElementById("home-div-id").style.display="none";

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("login-div-id").style.display="none";
        document.getElementById("home-div-id").style.display="block";
    } else {
        document.getElementById("login-div-id").style.display="block";
        document.getElementById("home-div-id").style.display="none";
    }
  });


function login(){
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
 firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert("Successfully logged-in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function logout(){
    firebase.auth().signOut().then(() => {

      }).catch((error) => {

      });
      document.getElementById("email-input").value="";
      document.getElementById("password-input").value="";
}