
//Create a new user model with random X Y positions
function User () {
    this.userID = "";
    this.mineID;
    this.name = "";
    this.coX = Math.floor(Math.random()*100);
    this.coY = Math.floor(Math.random()*100);
    this.blockColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.bot = 0;
    this.mining = false;
    this.oj = function () {
        var oj = new Object({name: this.name, coX: this.coX, coY: this.coY, blockColour: this.blockColour, mining: this.mining});
        return oj;
    }
}

function addUser(user){
    users.push(user);
}

function removeUser(user){
   var resultList = users.filter(function(listEntries) {
        return listEntries.userID !== user.userID;
    });
   users = resultList;
}

function findUser(id){
    for (var i = 0; i < users.length; i++) {
        if (users[i]["userID"] === id) {
            return users[i];
        }
    }
    return null;
}


//Update existing user model
// function updateUser(user, userID, name, CoX, CoY, blockColour, bot, mining){
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

//Create a new user model bot and add to the network
function Bot() {
    var client = new User();
    client.userID = "" + Math.floor(Math.random() * 100);
    client.name = "Bot" + client.userID;
    client.bot = 1;
    usersRef.add({
        'name':client.name,
        'coX':client.coX,
        'coY':client.coY,
        'blockColour':client.blockColour,
        'bot':client.bot,
        'mining': client.mining
    }).then(ref => {
        console.log('Added document with ID: ', ref.id);
        client.userID = ref.id;
        addUser(client);
        Node(client);
        snackbar(client.name + " added");
    });

}

//A client s visual representation on the network
function Node(client) {
    clientMapEntry(client);
    clientListEntry(client);
}

//Map - Add client to html and css
function clientMapEntry(client){
    //HTML Elements
    var newclient = document.createElement("LI");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    //Assign IDs and Classes
    div1.id = client.userID;
    div1.classList.add("n");
    div1.innerText = client.name;
    div2.classList.add("n1");
    div3.classList.add("n2");


    //CSS Elements - Position and colour
    div1.style.top = "" + client.coY + "px";
    div1.style.left = "" + client.coX + "%";
    div3.style.background = client.blockColour;

    //Add to document
    document.getElementById("map").appendChild(newclient);
    newclient.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);

    if(client.mining === true) {
        div3.classList.add("mining");
    }
    console.log(client.mining);

}

//Tabs Client List - Add client entry to html and css
function clientListEntry(client){
    //HTML Elements
    var clientEntry = document.createElement("LI");

    var diva = document.createElement("div");
    var divb = document.createElement("div");
    var divc = document.createElement("div");
    var divd = document.createElement("div");

    var labela = document.createElement("label");
    var inputa = document.createElement("checkbox");
    var spana = document.createElement("span");
    var btna = document.createElement("button");

    //LI - ID and Class
    clientEntry.id = client.userID;
    clientEntry.classList.add("item_portion");

    //Div classes and username
    diva.classList.add("c_leftsection");
    divb.classList.add("c_block");
    divc.classList.add("c_midsection");
    divc.innerText = client.name;
    divd.classList.add("c_rightsection");

    //Functionals classes
    divb.style.background = client.blockColour;
    labela.classList.add("switch");
    inputa.type = "checkbox";
    spana.classList.add("slider");
    spana.classList.add("round");

    //Add to document
    document.getElementById("tabs_client_list").appendChild(clientEntry);
    clientEntry.appendChild(diva);
    diva.appendChild(divb);
    clientEntry.appendChild(divc);
    clientEntry.appendChild(divd);
    divd.appendChild(labela);


    if(client.bot == 1) {
        btna.setAttribute("data-parent_id", client.userID);
        btna.classList.add("c_remove");
        btna.innerText = "-";
        btna.addEventListener("click", function () {
            var user = findUser(btna.getAttribute("data-parent_id"));
            removeBot(user);
        }, false);
        labela.addEventListener("click", function(){
            var user = findUser(btna.getAttribute("data-parent_id"));
            mineOnOff(user);
        });
        divd.appendChild(btna);
        labela.appendChild(inputa);
        inputa.appendChild(spana);
    }

}

function removeBot(user){
    usersRef.doc(user.userID).delete().then(function() {
        snackbar(""+user.name+" Removed");
    }).catch(function(error) {
        snackbar("Error with Bot Removal");
    });

    var entry = document.getElementById(user.userID);
    entry.parentNode.removeChild(entry);
    entry = document.getElementById(user.userID);
    entry.parentNode.removeChild(entry);

    removeUser(user);
}