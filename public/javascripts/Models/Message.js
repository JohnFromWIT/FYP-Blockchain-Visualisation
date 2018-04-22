//------- Message Model -----------//

function Message(){
    this.messageID = "";
    this.Content = "";
    this.blockNo = chain.length;
    this.UserID = "";
    this.Time = new Date();
}

function latestMessages(user) {
    var compiledMessages = [];
    if (messages.length - 1 > user.lastMessage)
    {
        for (i = user.lastMessage; i < messages.length; i++) {
            compiledMessages.push(i);
        }
    }
    return compiledMessages;
}