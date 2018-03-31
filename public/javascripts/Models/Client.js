//------- Client Model -----------//

//Create a new user model with random X Y positions
function User () {
    this.userID = "";
    this.name = "";
    this.coX = Math.floor(Math.random()*100);
    this.coY = Math.floor(Math.random()*100);
    this.blockNo = 0;
    this.block = 0x1234ffff;
    this.bot = false;
    this.mining = false;
    this.mineID = "";
    this.nonce = 0;
    this.chain = [];
    this.lastMessage = -1;
}

//Create a new user model bot and add to the network
function Bot() {
    var client = new User();
    client.name = "Bot" + Math.floor(Math.random() * 100);
    client.bot = true;
    usersRef.add({
        'name':client.name,
        'coX':client.coX,
        'coY':client.coY,
        'block':client.block,
        'bot':client.bot,
        'mining': client.mining
    }).then(ref => {
        console.log('Added bot with ID: ', ref.id);
        client.userID = ref.id;
        refreshNodeList();
        snackbar(client.name + " added");
    });
}

function findUser(id){
    for (var i = 0; i < users.length; i++) {
        if (users[i]["userID"] === id) {
            return users[i];
        }
    }
    return null;
}


function updateUser(user){
    for (var i = 0; i < users.length; i++) {
        if (users[i]["userID"] === user.userID) {

            users[i].userID = user.userID;
            users[i].name = user.name;
            users[i].coX = user.coX;
            users[i].coY = user.coY;
            users[i].blockColour = user.blockColour;
            users[i].bot = user.bot;
            users[i].mining = user.mining;
        }
    }
    updateFireStore(user);
}

