function User () {
    this.clientID = "";
    this.name = "";
    this.coX = Math.floor(Math.random()*100);
    this.coY = Math.floor(Math.random()*100);
    this.blockColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.getName = getName;
    this.setName = setName;
}

function getName() {
    return this.name;
}

function setName(name) {
    this.name = name;
}

function addBot() {
    var client = new User();
    client.clientID = ""+Math.floor(Math.random()*100);
    client.name = "John"+client.clientID;

    //HTML Elements
    var newclient = document.createElement("LI");                 // Create a <li> node
    var div1 = document.createElement("div");
    div1.id = client.clientID;
    div1.classList.add("n");
    var div2 = document.createElement("div");
    div2.classList.add("n1");
    var div3 = document.createElement("div");
    div3.classList.add("n2");
    div3.classList.add("mining");

    // var i;
    // for(i=1; i<6; i++){
    //     var client = new User();
    //     document.write("#client"+i+"{top:"+ client.coY+"px; left:"+client.coX+"%}");
    //     document.write("\n");
    //     document.write("#client"+i+" .n2{background-color: "+ client.blockColour+"}");
    // }
    //
    // document.write("</style>");
    //

    //CSS Elements
    div1.style.top = ""+client.coY+"px";
    div1.style.left = ""+client.coX+"%";
    div3.style.background = client.blockColour;

    document.getElementById("map").appendChild(newclient);
    newclient.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);

    // newclient.insertAdjacentHTML(afterbegin, "<div id= 'client1' class='n'><div class='n1'><div class='n2 mining'></div></div></div>");
}
