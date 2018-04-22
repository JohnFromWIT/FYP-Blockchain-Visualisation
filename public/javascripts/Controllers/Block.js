//------- Block Controller -----------//

//Add block to allBlocks
function addBlock(block){
    allBlocks.unshift(block);
}

function addChain(block){
    chain.unshift(block);
}

function refreshBlockList() {
    var list = document.getElementById("tabs_block_list");
    list.innerText = "";
    chain.forEach((block) => {
        blockListEntry(block);
    });
}

function retrieveBlocks() {
    chain = [];
    db.collection("blocks").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let block = new Block();
            let dbBlock = doc.data();
            block.blockID = doc.id;
            block.blockNo = dbBlock.blockNo;
            block.nonce = dbBlock.nonce;
            block.hash = dbBlock.hash;
            block.time = dbBlock.time;
            block.findingUser = dbBlock.findingUser;
            block.messages = dbBlock.messages;
            block.messageHash = dbBlock.messageHash;
            block.diff = dbBlock.diff;

            addChain(block);
        }), refreshBlockList();
    });
}

function newBlock(block){
    blocksRef.doc(""+block.time).set({
        'blockNo': block.blockNo,
        'nonce': block.nonce,
        'hash':block.hash,
        'time':block.time,
        'findingUser':block.findingUser,
        'messages':block.messages,
        'messageHash':block.messageHash,
        'diff':block.diff
    });
}
