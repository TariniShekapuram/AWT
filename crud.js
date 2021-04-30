//  // Your web app's Firebase configuration
// const { table } = require("node:console");

// const { ok } = require("node:assert");
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDtqyDxhk-ND59xcW_D6ejXnB5cRd9QYoc",
    authDomain: "first-b1e9b.firebaseapp.com",
    projectId: "first-b1e9b",
    storageBucket: "first-b1e9b.appspot.com",
    messagingSenderId: "1098234805305",
    appId: "1:1098234805305:web:ebc2c6cdf4a27c2015e1e8",
    measurementId: "G-FVJQGMNLXN"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dbref=firebase.database().ref().child("users");
//user creation
function createUser()
{
    var n=document.getElementById("uname").value;
    var eid=document.getElementById("email").value;
    console.log("creating user");
    dbref.child(n).set({
        uname:n,
        email:eid
    })
    userlist.innerHTML=""
    readUser()
}
//user updation
function updateUser()
{
    console.log("Update user");
    let uname=window.prompt("Enter the username to update");
    let email=window.prompt("Enter the email to update");
    dbref.child(uname).update({
        email:email,
        age:20
    })
    console.log("details updated");
    userlist.innerHTML=""
    readUser()
}
//user deletion
function deleteUser(username)
{
    console.log(username.id)
    console.log("Delete user");
    console.log(username.id);
    //let username=window.prompt("Enter the username to delete");
    dbref.child(username.id).remove();
    console.log(username+" removed");
    userlist=document.getElementById("userList")
    userlist.innerHTML=""
    readUser();
    
}
//reading user
function readUser()
{
    userlist=document.getElementById("userList")
    //userlist.innerHTML=""
    table=document.createElement("table")
    table.className="table"
    table.border="0"
    table.width="100%"
    r1=table.insertRow(-1)
    h1=r1.insertCell(-1)
    h2=r1.insertCell(-1)
    h3=r1.insertCell(-1)
    h1.innerHTML="<div class='display-5'>Username</div>"
    h2.innerHTML="<div class='display-5'>Email</div>"
    dbref.on("child_added",(snap)=>
        {
           // console.log(snap.key)
            row=table.insertRow(-1)
            cell1=row.insertCell(-1)
            cell1.innerHTML=snap.val().uname
            cell2=row.insertCell(-1)
            cell2.innerHTML=snap.val().email
            cell3=row.insertCell(-1)
            b1=document.createElement("span")
           // console.log(snap.val().uname)
            b1.innerHTML=`<button class='btn-danger' id=${snap.val().uname} onclick='deleteUser(this)'><i class='fa fa-trash'></i></button>`
            cell3.appendChild(b1)
        })
    userlist.append(table)
   // userlist.append(b1)
}

