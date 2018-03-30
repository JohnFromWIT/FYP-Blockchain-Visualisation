//Crete a list of messages
function compiledMessage()
{
    messages = [];
}

//Future add message
// function addMessage(messages, messageID, messageContent) {
//     messages.push({
//         messageID: messageID,
//         messageContent: messageContent
//     });
// }


//New message
function message(){
    this.messageID = "";
    this.messageContent = "";
}

function Message(){
    this.messageID = "",
    this.Content = "";
    this.Concensus = 0;
    this.UserID = "";
    this.Time = new Date();
}

//Current add message
function addMessage(message){
    messages.unshift(message);
}


//Refresh Message List
function refreshMessages()
{
    var list = document.getElementById("tabs_message_list");
    list.innerText = "";
    messages.forEach((message) => {

        messageListEntry(message);
    });
}



function timeString(Time)
{
    return Time.getDay()+'/'+Time.getDate()+'-'+Time.getHours()+':'+Time.getMinutes()+':'+Time.getSeconds();
}

function messageListEntry(message)
{
    var muserid = message.UserID;
    var user = findUser(muserid);

//HTML Elements
    var messageEntry = document.createElement("LI");

    var diva = document.createElement("div");
    var divb = document.createElement("div");
    var divc = document.createElement("div");
    var divd = document.createElement("div");
    var dive = document.createElement("div");
    var divf = document.createElement("div");
    var divg = document.createElement("div");
    var divh = document.createElement("div");
    var divi = document.createElement("div");
    var divj = document.createElement("div");
    var divk = document.createElement("div");
    var divl = document.createElement("div");


    //LI - ID and Class
    messageEntry.id = message.messageID;
    messageEntry.classList.add("item_portion");

    //Div classes
    diva.classList.add("item_portion");
    divb.classList.add("m_leftsection");
    divc.classList.add("m_leftsectionupper");
    divd.classList.add("m_user");
    dive.classList.add("m_timesection");
    divf.classList.add("m_timetitle");
    divg.classList.add("m_time");
    divh.classList.add("m_progresssection");
    divi.classList.add("m_progressbar");
    divj.classList.add("m_progress");
    divk.classList.add("m_content");
    divl.classList.add("m_cblock");

    //Div Contents
    divd.innerText = user.name;
    divg.innerText = timeString(message.Time);

    var ceiling = 100;
    var incrementSize = 10;


    divj.style.width = (message.Concensus*incrementSize<ceiling)? incrementSize * message.Concensus + "%" : ceiling + "%";

    divk.innerText = message.Content;

    //Add to document
    document.getElementById("tabs_message_list").appendChild(messageEntry);
    messageEntry.appendChild(diva);
    diva.appendChild(divb);
    divb.appendChild(divc);
    divc.appendChild(divd);
    divc.appendChild(dive);

    dive.appendChild(divg);

    divb.appendChild(divh);

    divh.appendChild(divi);
    divi.appendChild(divj);

    diva.appendChild(divk);
    diva.appendChild(divl);

}