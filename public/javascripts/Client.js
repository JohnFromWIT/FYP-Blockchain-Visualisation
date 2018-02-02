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
