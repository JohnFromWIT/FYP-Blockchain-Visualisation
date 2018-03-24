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

function stopMine(user){
    clearInterval(user.mineID);
}

function startMine(user){
    user.mineID = window.setInterval(mine, 3000, user);
}

function mine(user){
    let attempt  = new Block();
    user.nonce++;
    attempt.nonce = user.nonce;
    attempt.blockNo = user.blockNo + 1;
    attempt.timeStamp = Date.now();
    attempt.findingUser = user.userID;
    attempt.messages = [1,5];
    attempt.prevHash = 486975;

    attempt.hash = Hash(attempt);
    if (validate(attempt, networkDiff))
    {
        attempt.hit = true;
        addBlock(attempt);
        updateChain(user, attempt);
        snackbar("success");
        user.nonce = 0;
    }
    alert("Hash: #" + attempt.hash.toString(16) + "   Hit: " + attempt.hit + "   Time: "+ attempt.timeStamp);
}

function Hash(hashable){
//Using inputs creates a hash
    //Ceiling - range
    let ceiling = 0xffffffff;
    let prevHash = hashable.prevHash;
    let messageHash = hashable.messageHash;
    let nonce = hashable.nonce;


    //Run Process
    let hash = (prevHash*messageHash*nonce)%ceiling;

    //Return the hash
    return hash;

}

//validates block hash against passed in diff
//diff comes from different places depending on where function is called from.
function validate(block, diff){
    //Does hash meet criteria?
    return(block.hash<diff);

}

function updateChain(){
//    Updates a single users chain

}

