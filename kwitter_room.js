
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAthYJ2jyA0KY8rFBtrwClPXEMsMYTHs5Y",
      authDomain: "c42project-e4110.firebaseapp.com",
      databaseURL: "https://c42project-e4110-default-rtdb.firebaseio.com",
      projectId: "c42project-e4110",
      storageBucket: "c42project-e4110.appspot.com",
      messagingSenderId: "668102068534",
      appId: "1:668102068534:web:47c8d0a77c8f1867b00b97"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      user_name = document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
       purpose:"adding user"
      });
      //End code
      });});}
getData();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirecToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code     
     });});}
getData();
function addRoom ()
{
room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name "
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}

function redirecToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
