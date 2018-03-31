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
