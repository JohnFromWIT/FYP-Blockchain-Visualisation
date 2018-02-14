//passed in user is added to firestore
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

//Users on firestore are added to map
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
