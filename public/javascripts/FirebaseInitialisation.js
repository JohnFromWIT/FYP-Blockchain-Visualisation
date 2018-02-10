// Initialize Firebase
var config = {
    apiKey: "AIzaSyBERESHwl8m2_KLNX3MujVltBbhdQpoOqI",
    authDomain: "blockchain-visualisation-app.firebaseapp.com",
    databaseURL: "https://blockchain-visualisation-app.firebaseio.com",
    projectId: "blockchain-visualisation-app",
    storageBucket: "blockchain-visualisation-app.appspot.com",
    messagingSenderId: "198246009981"
};


function addUserToNetwork(user) {

    usersRef.doc(user.id).set({
        name: user.name,
        CoX: user.CoX,
        CoY: user.CoY,
        blockColour: user.blockColour
    }).then(function () {
        console.log("User Added to database");
    }).catch(function (error) {
        console.log("Got Error: ", error);
    });
}

function populateMapFromFirebase(){
    usersRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const user = new User();
            updateUser(user,doc.id, doc.data("name"), doc.data("CoX"), doc.data("CoY"), doc.data("blockColour"));
            Node(user);
            // doc.data() is never undefined for query doc snapshots
            console.log("Retrieved User: "+doc.id+" -> "+doc.data("name"));
        });
    });
}
