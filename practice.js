// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7Je413fj9OmciiaEPOZ6STQHBF6pr7BU",
    authDomain: "kwitter-cf174.firebaseapp.com",
    databaseURL: "https://kwitter-cf174-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf174",
    storageBucket: "kwitter-cf174.appspot.com",
    messagingSenderId: "1022620791289",
    appId: "1:1022620791289:web:c20bc8096d3cde50184d28"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}