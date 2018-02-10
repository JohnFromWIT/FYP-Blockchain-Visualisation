function User () {
    this.userID = "";
    this.name = "";
    this.coX = Math.floor(Math.random()*100);
    this.coY = Math.floor(Math.random()*100);
    this.blockColour = '#'+Math.floor(Math.random()*16777215).toString(16);
}

function updateUser(user, userID, name, CoX, CoY, blockColour){
    user.userID = userID;
    user.name = name;
    user.coX = CoX;
    user.coY = CoY;
    user.blockColour = blockColour;
}

function Bot() {
    var client = new User();
    client.userID = "" + Math.floor(Math.random() * 100);
    client.name = "Bot" + client.userID;
    Node(client);
}

function Node(client) {
    //HTML Elements
    var newclient = document.createElement("LI");                 // Create a <li> node
    var div1 = document.createElement("div");
    div1.id = client.userID;
    div1.classList.add("n");
    div1.innerText = client.name;
    var div2 = document.createElement("div");
    div2.classList.add("n1");
    var div3 = document.createElement("div");
    div3.classList.add("n2");
    div3.classList.add("mining");


    //CSS Elements
    div1.style.top = "" + client.coY + "px";
    div1.style.left = "" + client.coX + "%";
    div3.style.background = client.blockColour;

    document.getElementById("map").appendChild(newclient);
    newclient.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);

    clientEntry(client);
}
    //Tab List Elements

function clientEntry(client){
    var clientEntry = document.createElement("LI");                 // Create a <li> node
    clientEntry.id = client.userID;
    clientEntry.classList.add("item_portion");

    var diva = document.createElement("div");
    diva.classList.add("c_leftsection");

    var divb = document.createElement("div");
    divb.classList.add("c_block");

    var divc = document.createElement("div");
    divc.classList.add("c_midsection");
    divc.innerText = client.name;

    var divd = document.createElement("div");
    divd.classList.add("c_rightsection");

    var labela = document.createElement("label");
    labela.classList.add("switch");

    var inputa = document.createElement("checkbox");
    inputa.checked = true;

    var spana = document.createElement("span");
    spana.classList.add("slider");
    spana.classList.add("round");

    var btna = document.createElement("button");
    btna.classList.add("c_remove");


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
