function mineOnOff(user){
    //var a = getUserMining(userID);
    if(user.mining === false)
    {
        startMine(user);
    }else{
        stopMine(user);
    }
    // updateUser(user);
    refreshNodeList();
}

function stopMine(user){
    clearInterval(user.mineID);
    user.mining = false;
    snackbar("User: "+user.name+" stops mining");
}

function startMine(user){
    user.mining = true;
    user.mineID = window.setInterval(mine, 3000, user);
    snackbar("User: "+user.name+" begins mining");
}

function mine(user){

    let attempt  = new Block();
    user.nonce++;

    attempt.nonce = user.nonce;
    attempt.blockNo = user.blockNo + 1;
    attempt.findingUser = user.userID;

    attempt.messages = latestMessages(user);
    attempt.prevHash = user.block;
    attempt.hash = hash(attempt);

    if (validate(attempt, networkDiff))
    {
        mineSuccess(user, attempt);
    }
}

function hash(hashable){
    //Hash Inputs
    let ceiling = 0xffffffff;
    let prevHash = hashable.prevHash;
    let messageHash = hashable.prevHash;
    // let messageHash = hashable.messageHash;
    let nonce = hashable.nonce;

    //Process
    let hash = (prevHash*messageHash*nonce)%ceiling;
    return hash;
}

//validates block hash against difficulty
//diff comes from different places depending on where function is called from.
function validate(block, diff){
    return(block.hash<diff);
}


function mineSuccess(user, block)
{
    block.hit = true;
    addBlock(block);

    user.nonce = 0;
    user.blockNo = block.blockNo;
    user.block = block.hash;
    if (block.messages.length > 0)
    {
        user.lastMessage = block.messages[(block.messages.length)-1];
    }

    snackbar(user.name + " found a block!");
    refreshAll();
}

