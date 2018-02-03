function Block(blockID, blockNo, date, userID, message, hash){
    this.blockID = blockID;
    this.blockNo = blockNo;
    this.blockTS = date.getTime();
    this.findingUser = userID;
    this.message = message;
    this.hash = hash;
}

function Chain(){
    this.blocks = [];
}

function addBlock(chain, block){
    chain.blocks.push(block);
}

function getChainBlockMessage(chain, block){
    var b = chain.blocks[block];
    return b.message;
}