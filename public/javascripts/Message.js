//Crete a list of messages
function compiledMessage()
{
    messages = [];
}

//Future add message
// function addMessage(messages, messageID, messageContent) {
//     messages.push({
//         messageID: messageID,
//         messageContent: messageContent
//     });
// }

//Current add message
function addMessage(messages, message){
    messages.push(message);
}

//New message
function message(){
    this.messageID = "";
    this.messageContent = "";
}