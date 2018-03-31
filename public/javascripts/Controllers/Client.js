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
