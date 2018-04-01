//------- Message Controller -----------//


//Current add message
function addMessage(message){
    messages.unshift(message);
}

function retrieveMessages() {
    console.log("retrieveMessages()");
    messages = [];
    db.collection("messages").orderBy('Time').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let message = new Message();
            let dbMessage = doc.data();
            message.messageID = doc.id;
            message.Content = dbMessage.Content;
            message.Concensus = dbMessage.Concensus;
            message.UserID = dbMessage.UserID;
            message.Time = dbMessage.Time;

            addMessage(message);
        });
        refreshMessages();
    });
}

function newMessage() {
    var message = new Message();
    message.UserID = localUser.userID;
    message.Content = document.getElementById('messageText').value;

    if(!containsProfanity(message.Content)) {

        db.collection("messages").doc().set({
            Content: message.Content,
            Concensus: message.Concensus,
            UserID: message.UserID,
            Time: message.Time
        })
            .then(function () {
                refreshMessages();
                console.log("Message successfully Added!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        document.getElementById('messageText').value = "";
    }else{
        console.log("Profanity Detected");
        snackbar("No profanity please.");
    }

    // var lastMessage = db.collection("messages").orderBy('Time', 'desc').limit(1);
}
