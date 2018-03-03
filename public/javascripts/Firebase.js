//Update firebase with local data
// function addUserToNetwork(user) {
function updateFireStore(user) {
    usersRef.doc(user.userID).set({
        name: user.name,
        coX: user.coX,
        coY: user.coY,
        blockColour: user.blockColour,
        bot: user.bot,
        mining: user.mining
    }).then(function () {
        console.log("Database Updated");
    }).catch(function (error) {
        console.log("Got Error: ", error);
    });
}

//Users on firestore are added to map
function populateMapFromFirebase(){
    usersRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const user = new User();
            // updateUser(user,doc.id, doc.data("name"), doc.data("CoX"), doc.data("CoY"), doc.data("blockColour"), doc.data("bot"), doc.data("mining"));
            updateUser(user);
            Node(user);
            // doc.data() is never undefined for query doc snapshots
            console.log("Retrieved User: "+doc.id+" -> "+doc.data("name"));
        });
    });
}

