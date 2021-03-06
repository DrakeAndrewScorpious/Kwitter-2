
//ADD YOUR FIREBASE LINKS HERE
room_name = localStorage.setItem("RoomName").value;

document.getElementById("RoomName", room_name);

function addRoom() {
      RoomName = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(RoomName).update({
            purpose: "adding room name"
      });
      localStorage.setItem("RoomName", RoomName);
      window.location("kwitter_page.html");
}
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
       RoomNames = childKey;

      console.log("Room Name", RoomNames);
      row = "<div class='room_names' id="+RoomNames+" onclick= 'redirectToRoomName(this.id)'>#"+
      RoomNames+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });
    });
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("RoomName", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("RoomName");
      localStorage.removeItem("user_name");
      window.location ="index.html";      
}