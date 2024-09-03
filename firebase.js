// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDomFP_7Pv4CTpBTaHMzcmdNlK_S2s28DY",
  authDomain: "justjogauthentication.firebaseapp.com",
  databaseURL: "https://justjogauthentication-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "justjogauthentication",
  storageBucket: "justjogauthentication.appspot.com",
  messagingSenderId: "419798942200",
  appId: "1:419798942200:web:df39c79374f7533a26d60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
// get ref to dtb service
const db = getDatabase(app);



document.getElementById("submit").addEventListener('click', function(e){
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    e.preventDefault()
    set(ref(db, 'user/' + username ),
    {
        username: username,
        email: email,
        password: password
    });
   

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
      
        // ...
    })

    alert("Sign up successfully")
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });

    
}) 

login.addEventListener('click', function(e){
    var email = document.getElementById('log-email').value;
    var username = document.getElementById('username').value;

    var password = document.getElementById('log-password').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
// Signed in 
        const user = userCredential.user;
        const dt = new Date();
        const userId = auth.currentUser.uid;


        update(ref(db, 'user/' + userId),
        {
            last_login : dt,
            username: username
        });
        window.location.href = "/Home-Page/run.html";
// ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
    });

})