
//Create a new user model with random X Y positions
function User () {
    this.userID = "";
    this.name = "";
    this.coX = Math.floor(Math.random()*100);
    this.coY = Math.floor(Math.random()*100);
    this.blockColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.oj = function () {
        var oj = new Object({name: this.name, coX: this.coX, coY: this.coY, blockColour: this.blockColour});
        return oj;
    }
    this.bot = 0;
}



//Update existing user model
function updateUser(user, userID, name, CoX, CoY, blockColour, bot){
    user.userID = userID;
    user.name = name;
    user.coX = CoX;
    user.coY = CoY;
    user.blockColour = blockColour;
    user.bot = bot;
}

//Create a new user model bot and add to the network
function Bot() {
    var client = new User();
    client.userID = "" + Math.floor(Math.random() * 100);
    client.name = "Bot" + client.userID;
    client.bot = 1;
    usersRef.add({
        'name':client.name,
        'CoX':client.coX,
        'CoY':client.coY,
        'blockColour':client.blockColour,
        'bot':client.bot
    });

    Node(client);
    snackbar(client.name + " added");


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
    div3.classList.add("mining");

    //CSS Elements - Position and colour
    div1.style.top = "" + client.coY + "px";
    div1.style.left = "" + client.coX + "%";
    div3.style.background = client.blockColour;

    //Add to document
    document.getElementById("map").appendChild(newclient);
    newclient.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);
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
    inputa.checked = true;
    spana.classList.add("slider");
    spana.classList.add("round");


    //Add to document
    document.getElementById("tabs_client_list").appendChild(clientEntry);
    clientEntry.appendChild(diva);
    diva.appendChild(divb);
    clientEntry.appendChild(divc);
    clientEntry.appendChild(divd);
    divd.appendChild(labela);
    labela.appendChild(inputa);
    inputa.appendChild(spana);

    if(client.bot == 1) {
        btna.setAttribute("data-parent_id", client.userID);
        btna.classList.add("c_remove");
        btna.innerText = "-";
        btna.addEventListener("click", function () {
            removeBot(btna.getAttribute("data-parent_id"));
        }, false);
        divd.appendChild(btna);
    }

}

function removeBot(botID){
    usersRef.doc(botID).delete().then(function() {
        snackbar("Bot Removed");
    }).catch(function(error) {
        snackbar("Error with Bot Removal");
    });

    var entry = document.getElementById(botID);
    entry.parentNode.removeChild(entry);
    entry = document.getElementById(botID);
    entry.parentNode.removeChild(entry);



}