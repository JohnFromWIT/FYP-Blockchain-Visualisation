function attemptList(attempt)
{
    // alert(attempt.hash);
    var attemptEntry = document.createElement("div");
    var br = document.createElement("br");
    if (attempt.hit == true)
    {
        attemptEntry.classList.add("miner_hit");
    }else
    {
        attemptEntry.classList.add("miner_miss");
    }

    var diva = document.createElement("div");
    var divb = document.createElement("div");
    var divc = document.createElement("div");
    var divd = document.createElement("div");
    var dive = document.createElement("div");


    //LI - ID and Class
    attemptEntry.id = attempt.hash;
    attemptEntry.classList.add("miner_attempt");

    //Div classes
    diva.classList.add("a_col_block");
    divb.classList.add("a_col_hit");
    divc.classList.add("a_col_nonce");
    divd.classList.add("a_col_package");
    dive.classList.add("a_col_messages");

    //Div Content
    diva.innerText = attempt.blockNo;
    divb.innerText = attempt.hit;
    divc.innerText = attempt.nonce;
    divd.innerText = attempt.hash.toString(16);
    if(attempt.messages.length > 0) {
        dive.innerText = attempt.messages.toString();
    }
    else{
        dive.innerText = "NA";
    }
    //Add to document
    document.getElementById("mine_attempts").prepend(attemptEntry);
    attemptEntry.appendChild(diva);
    attemptEntry.appendChild(divb);
    attemptEntry.appendChild(divc);
    attemptEntry.appendChild(divd);
    attemptEntry.appendChild(dive);
    attemptEntry.appendChild(br);
}

function currentBlock(block)
{
    var diffPercentage = Math.floor((block.diff/range)*100);

    var b_chainlength = document.getElementById("b_chainlength");

    var m_colour = document.getElementById("m_colour");
    var m_number = document.getElementById("m_number");
    var m_nonce = document.getElementById("m_nonce");
    var m_package = document.getElementById("m_package");
    var m_difficulty = document.getElementById("m_difficulty");

    b_chainlength.innerText = '' + chain.length;

    m_number.innerText = block.blockNo;
    m_nonce.innerText = block.nonce;
    m_package.innerText = block.hash.toString(16);
    m_difficulty.innerText = diffPercentage+'%';
    m_colour.style.background = '#'+block.hash.toString(16).substring(0,6);


}