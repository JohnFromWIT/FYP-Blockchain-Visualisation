//------- Block Controller -----------//

//Add block to allBlocks
function addBlock(block){
    allBlocks.unshift(block);
}

function refreshBlockList() {
    var list = document.getElementById("tabs_block_list");
    list.innerText = "";
    allBlocks.forEach((block) => {
        blockListEntry(block);
    });
}

function retrieveBlocks() {
    allBlocks = [];
    db.collection("blocks").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let block = new Block();
            let dbBlock = doc.data();
            block.blockID = doc.id;
            block.blockNo = dbBlock.blockNo;
            block.hash = dbBlock.hash;
            block.time = dbBlock.time;
            block.findingUser = dbBlock.findingUser;
            block.messages = dbBlock.messages;
            block.messageHash = dbBlock.messageHash;
            block.diff = dbBlock.diff;

            addBlock(block);
        }), refreshBlockList();
    });
}
