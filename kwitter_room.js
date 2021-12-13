
var firebaseConfig = {
      apiKey: "AIzaSyBuvGbyLZi7TnASVCEuA_ZlM0c9ONLEGQI",
      authDomain: "emeralds-and-ruby-4edb8.firebaseapp.com",
      databaseURL: "https://emeralds-and-ruby-4edb8-default-rtdb.firebaseio.com",
      projectId: "emeralds-and-ruby-4edb8",
      storageBucket: "emeralds-and-ruby-4edb8.appspot.com",
      messagingSenderId: "34395887304",
      appId: "1:34395887304:web:5328e2abe52992330cb7fd"
    };
    

    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
