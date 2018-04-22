// Config for Initialize Firebase
var config = {
    // This config will need to be populated in order to user the app.
    // The hosted version has a config file.
    // As sensitive information it has been removed from the uploaded version.
};

firebase.initializeApp(config);
var db = firebase.firestore();
const blocksRef = db.collection("blocks");
const messagesRef = db.collection("messages");
const usersRef = db.collection("users");


