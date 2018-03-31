//------------All this can be deleted when it feels most appropriate-----------//

//Chain
function Chain(){
    this.blocks = [];
}


function updateChain(user, block)
{
    user.chain.push(block);
}


//Get only messgage on block on a chain
//Requires updating to a single or multiple message
function getChainBlockMessage(chain, block){
    var b = chain.blocks[block];
    return b.message;
}

