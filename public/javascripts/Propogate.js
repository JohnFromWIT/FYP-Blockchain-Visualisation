//Which users recieve a block
function propogate()
{
    for(i=0; i<users.length; i++)
    {
        if((Math.floor(Math.random()*10))<4) {
            recieveBlock(users[i]);
        }
    }
    retrieveUsers();
}

//On user recieving a block from another user
function recieveBlock(user)
{
    var current = user.blockNo;
    var blockIndex = 0;

    for(i = allBlocks.length-1; i > -1; i--)
    {
    if (current == user.blockNo) {
        if (allBlocks[i].blockNo > current) {
            current = allBlocks[i].blockNo;
            blockIndex = i;
        }
    }
    else
    {
        break;
    }
    }

    if (current > user.blockNo)
    {
        user.blockNo = allBlocks[blockIndex].blockNo;
        user.block = allBlocks[blockIndex].hash;
        if(user.userID == localUser.userID)
        {
            addChain(allBlocks[blockIndex]);
            currentBlock(allBlocks[blockIndex]);
            refreshBlockList();
        }
        updateFireStore(user);

    }
}