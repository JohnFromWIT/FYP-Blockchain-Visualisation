function mine(){
    let nonce = 76;
    let attemptID = 4;

    // this.attemptID = attemptID;
    // this.block = 0;
    // this.nonce = nonce;
    // this.prevHash = 0xff;
    // this.messages = [];
    // this.messageHash = 0xff;
    // this.package = Hash(this.prevHash, this.messageHash, this.nonce);
    // this.hit = validate(this.package);

    alert("Mined");

}

function stopMine(user){
    clearInterval(user.mineID);

};

function startMine(user){
    user.mineID = window.setInterval(mine, 3000);
}

function mineOnOff(user){
    //var a = getUserMining(userID);
    if(user.mining === false)
    {
        snackbar("User: "+user.name+" begins mining");
        user.mining = true;
        startMine(user);
        }else{
        snackbar("User: "+user.name+" stops mining");
        user.mining = false;
        stopMine(user);
    }
    updateUser(user);
}


function validate(hash){
//calidates hash
    var diff = 0xff;
    //Does hash meet criteria?
    if (hash < diff)
    {
        return true;
    }
    else {
        return false;
    }
    // Return result
}

function Hash(prevHash, messageHash, nonce){
//Using inputs creates a hash
    //Create single entry
    var a = 0xff;
    var ceiling = 0xffffffff;

    //Run Process
    a = (prevHash*messageHash*nonce)%ceiling;

    //Return the hash
    return a;

}

function updateChain(){
//    Updates a single users chain

}

