//------- Client Views -----------//

function refreshNodeList() {
    var list = document.getElementById("tabs_client_list");
    var map = document.getElementById("map");
    list.innerText = "";
    map.innerText = "";

    users.forEach((user) => {
        clientMapEntry(user);
        clientListEntry(user);
    });
}


//Map - Add client to html and css
function clientMapEntry(client){
    var colour = '#'+client.block.toString(16).substring(0,6);

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
    div3.style.background = colour;

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
    var colour = '#'+client.block.toString(16).substring(0,6);

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

    //Div Style
    divb.title = "Users current block";

    //Functionals classes

    divb.style.background = colour;
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
        btna.title = "Remove bot";
        labela.title = "Bot mining on off";
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
