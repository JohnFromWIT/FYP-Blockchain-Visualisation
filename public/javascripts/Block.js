//Create block with properties
function Block(blockID, blockNo, date, userID, message, hash){
    this.blockID = blockID;
    this.blockNo = blockNo;
    this.blockTS = date.getTime();
    this.findingUser = userID;
    this.message = message;
    this.hash = hash;
}

//Chain
function Chain(){
    this.blocks = [];
}

//Add block to chain
function addBlock(chain, block){
    chain.blocks.push(block);
}

//Get only messgage on block on a chain
//Requires updating to a single or multiple message
function getChainBlockMessage(chain, block){
    var b = chain.blocks[block];
    return b.message;
}