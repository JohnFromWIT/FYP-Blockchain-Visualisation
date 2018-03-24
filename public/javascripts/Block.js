//Create block with properties
function Block(){
    this.blockID = "";
    this.blockNo = 0;
    this.timeStamp = "";
    this.findingUser = "";
    this.prevHash = "";
    this.nonce = 70;
    this.messages = [];
    this.messageHash = 48655;
    this.hash = "";
    this.diff = networkDiff;
    this.hit = false;
}

//Chain
function Chain(){
    this.blocks = [];
}

//Add block to allBlocks
function addBlock(block){
    allBlocks.push(block);
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