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
    this.mineID = 0;
    this.nonce = 0;
    this.chain = [];
    this.lastMessage = -1;
}

//Create a new user model bot and add to the network
function Bot() {
    var client = new User();
    client.name = "Bot" + Math.floor(Math.random() * 100);
    client.bot = true;

    return client;
}

function newBot() {
    var bot = Bot();
    newUser(bot);
    refreshNodeList();

}

function findUser(id){
    var user = new User();
    for (var i = 0; i < users.length; i++) {
        if (users[i].userID === id) {
            user = users[i];
        }
    }

    return user;
}


function updateUser(user){
    for (var i = 0; i < users.length; i++) {
        if (users[i]["userID"] === user.userID) {

            users[i].userID = user.userID;
            users[i].name = user.name;
            users[i].coX = user.coX;
            users[i].coY = user.coY;
            users[i].blockColour = user.blockColour;
            users[i].block = user.block;
            users[i].blockNo = user.blockNo;
            users[i].bot = user.bot;
            users[i].mining = user.mining;
            users[i].mineID = user.mineID;

        }
    }
}

