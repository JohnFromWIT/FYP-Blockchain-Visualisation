function compiledMessage()
{
    messages = [];
}

// function addMessage(messages, messageID, messageContent) {
//     messages.push({
//         messageID: messageID,
//         messageContent: messageContent
//     });
// }

function addMessage(messages, message){
    messages.push(message);
}

function message(){
    this.messageID = "";
    this.messageContent = "";
}