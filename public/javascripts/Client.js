//Create a new user model with random X Y positions
function User () {
    this.userID = "";
    this.name = "";
    this.coX = Math.floor(Math.random()*100);
    this.coY = Math.floor(Math.random()*100);
    this.blockColour = '#'+Math.floor(Math.random()*16777215).toString(16);
}

//Update existing user model
function updateUser(user, userID, name, CoX, CoY, blockColour){
    user.userID = userID;
    user.name = name;
    user.coX = CoX;
    user.coY = CoY;
    user.blockColour = blockColour;
}

//Create a new user model bot and add to the network
function Bot() {
    var client = new User();
    client.userID = "" + Math.floor(Math.random() * 100);
    client.name = "Bot" + client.userID;
    Node(client);
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
    labela.classList.add("switch");
    inputa.checked = true;
    spana.classList.add("slider");
    spana.classList.add("round");
    btna.classList.add("c_remove");


    //Add to document
    document.getElementById("tabs_client_list").appendChild(clientEntry);
    clientEntry.appendChild(diva);
    diva.appendChild(divb);
    clientEntry.appendChild(divc);
    clientEntry.appendChild(divd);
    divd.appendChild(labela);
    labela.appendChild(inputa);
    inputa.appendChild(spana);
    divd.appendChild(btna);
}
