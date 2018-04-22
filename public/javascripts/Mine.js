//Called when a switch is flipped
function mineOnOff(user){

    if(user.mining === false)
    {
        startMine(user);
    }else{
        stopMine(user);
    }
    updateUser(user);
    updateFireStore(user);
    refreshNodeList();
    recalculateDiff();
}

//Stop te user mining
function stopMine(user){
    clearInterval(user.mineID);
    user.mining = false;
    snackbar("User: "+user.name+" stops mining");
    // updateUser(user);
}

// Start the user mining
function startMine(user){
    user.mining = true;
    user.mineID = window.setInterval(mine, 3000, user);
    snackbar("User: "+user.name+" begins mining");
    // updateUser(user);
}

//Creates an attempt then validates it
function mine(user){
    let attempt  = new Block();
    user.nonce++;

    attempt.nonce = user.nonce;
    attempt.blockNo = user.blockNo + 1;
    attempt.findingUser = user.userID;

    attempt.messages = latestMessages(user);
    attempt.prevHash = user.block;

    //Comment out one and in the other to switch hash type
    // attempt.hash = md5Hash(attempt);
    attempt.hash = hash(attempt);


    if (validate(attempt, networkDiff))
    {
        mineSuccess(user, attempt);
    }

    if (user.userID === localUser.userID) {
        attemptList(attempt);
    }
}

//My own developed Hash
function hash(hashable){
    //Hash Inputs

    let prevHash = hashable.prevHash;
    let messageHash = hashable.prevHash;
    let nonce = hashable.nonce;

    //Process
    let hash =  floor+(((ceiling-floor)*nonce*nonce*(getDigit(nonce, 4)+getDigit(prevHash, 3))+ ((messageHash*prevHash)/nonce))%(ceiling-floor));
    return hash;
}

//Imported MD5Hash
function md5Hash(attempt)
{
    var toHash = ''+ attempt.nonce + attempt.messageHash + attempt.prevHash;
    return md5(toHash);
}

function getDigit(number, n) {
    return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

//validates block hash against difficulty
//diff comes from different places depending on where function is called from.
function validate(block, diff){
    return(block.hash<diff);
}

//Add block to network
function mineSuccess(user, block)
{
    block.hit = true;

    if(user.userID === localUser.userID)
    {
        console.log("You found a block");
        newBlock(block);
        currentBlock(block);
    }
    addBlock(block);

    user.nonce = 0;
    user.blockNo = block.blockNo;
    user.block = block.hash;
    if (block.messages.length > 0)
    {
        user.lastMessage = block.messages[(block.messages.length)-1];
    }

    updateFireStore(user);

    snackbar(user.name + " found a block!");
    // if(localUser.userID === user.userID){
    //     alert("localuser found a block");
    // }
    refreshAll();
}

function recalculateDiff(){
    var numMiners = 1;
    for(i=0; i<users.length; i++)
    {
        if(users[i].mining = true)
        {numMiners++;}
    }
    networkDiff = floor+((ceiling - floor)/10*numMiners);
    document.getElementById("b_difficulty").innerText = 100-Math.floor((networkDiff/range)*100);
}
