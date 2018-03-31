//------- Client Controller -----------//

function addUser(user){
    users.push(user);
}

function removeUser(user){
    var resultList = users.filter(function(listEntries) {
        return listEntries.userID !== user.userID;
    });
    users = resultList;
    refreshNodeList();
}


function removeBot(user){
    if (user.mineID){
        stopMine(user);
    }
    usersRef.doc(user.userID).delete().then(function() {
        snackbar(""+user.name+" Removed");
    }).catch(function(error) {
        console(error);
    });

    var entry = document.getElementById(user.userID);
    entry.parentNode.removeChild(entry);
    entry = document.getElementById(user.userID);
    entry.parentNode.removeChild(entry);

    removeUser(user);
}

function retrieveUsers() {
    users = [];
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let user = new User();
            let dbUser = doc.data();
            user.userID = doc.id;
            user.name = dbUser.name;
            user.coX = dbUser.coX;
            user.coY = dbUser.coY;
            user.blockColour = dbUser.blockColour;
            user.bot = dbUser.bot;
            user.mining = dbUser.mining;

            addUser(user);
        }), refreshNodeList();
    });
}