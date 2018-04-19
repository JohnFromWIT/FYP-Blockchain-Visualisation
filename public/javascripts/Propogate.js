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

function recieveBlock(user)
{
    var current = user.blockNo;
    var blockIndex = 0;
    for(i=0; i<allBlocks.length; i++)
    {
    if(allBlocks[i].blockNo === current+1) {
        current = allBlocks[i].blockNo;
        blockIndex = i;
        break;
    }
    }
    if (current > user.blockNo)
    {
        user.blockNo = allBlocks[blockIndex].blockNo;
        user.block = allBlocks[blockIndex].hash;
        updateFireStore(user);

    }
}