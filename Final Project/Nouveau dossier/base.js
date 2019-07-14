
  var firebaseConfig = {
    apiKey: "AIzaSyAQChWT4AOae1zBShw-IAluMdrvcE0hd1I",
    authDomain: "finalproject-a2375.firebaseapp.com",
    databaseURL: "https://finalproject-a2375.firebaseio.com",
    projectId: "finalproject-a2375",
    storageBucket: "",
    messagingSenderId: "841556184524",
    appId: "1:841556184524:web:23f508d8f3d7d2ab"
  };
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('Go My Code project');
function submitForm(e){
    e.preventDefault();
    var Name = document.getElementById('F1').value;
    var Emailadress = document.getElementById('F2').value;
    var Checked= document.getElementById('F3').value;
    saveMessage(Name,Emailadress,Phonenumber);
}

document.getElementById('contact').addEventListener('submit',submitForm);
function saveMessage (Name,Emailadress,Phonenumber){
    var newmessageref=messagesRef.push()

    newmessageref.set({
        Name:Name,
        Emailadress:Emailadress,
        Phonenumber:Phonenumber,

    })}