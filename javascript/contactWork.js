// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBCbXZnHJJOplsDloQUxv2teovOrzx1qk",
    authDomain: "thinktankcontact-9ba0a.firebaseapp.com",
    databaseURL: "https://thinktankcontact-9ba0a.firebaseio.com",
    projectId: "thinktankcontact-9ba0a",
    storageBucket: "",
    messagingSenderId: "587683426147"
  };
  firebase.initializeApp(config);


var messagesRef = firebase.database().ref('ThinkTankContact');

//Making the form responsive
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get Values
    var name = getInput('name');
    var email = getInput('email');
    var phone = getInput('phone');
    var comments = getInput('comments');

    saveMessages(name, email, phone, comments);
    alert("Your Message Is Sent")

    document.getElementById('contactForm').reset();

}

//Values
function getInput(id) {
    return document.getElementById(id).value;

}


function saveMessages(name, email, phone, comments) {
    var newMessages = messagesRef.push();
    newMessages.set({
        name: name,
        email: email,
        phone: phone,
        comments: comments
    });
}