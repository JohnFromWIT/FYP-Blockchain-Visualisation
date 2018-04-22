//------Utility - Useful Functions-------

function timeString(Time)
{
    var ts = "";
    var now = new Date();
    if (Time.getDay() == now.getDay()-1)
    {
        ts = "Yesterday";
    } else if (Time.getDay() < now.getDay()-1)
    {
        ts = Time.getDay() + '-' + Time.getMonth() + '-' + Time.getFullYear().toString().substring(2,3);
    }
    else
    {
        ts = Time.getHours() + ':' + Time.getMinutes() + ':' + Time.getSeconds();
    }
    return ts;
}

function refreshAll()
{
    console.log("refreshAll()");
    refreshNodeList();
    refreshBlockList();
    refreshMessages();
}

function retrieveAll()
{
    console.log("retrieveAll");
    retrieveUsers();
    retrieveBlocks();
    retrieveMessages();
}

function setDatabaseListeners()
{
db.collection("messages")
    .onSnapshot(function (snapshot) {
        console.log("database messages changed");
        retrieveMessages()
    },function (error) {
        console(error);
    });

db.collection("blocks")
    .onSnapshot(function (snapshot) {
        retrieveBlocks()
    },function (error) {
        console(error);
    });

db.collection("users")
    .onSnapshot(function (snapshot) {
        retrieveUsers()
    },function (error) {
        console(error);
    });
}

String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

var containsProfanity = function(text){
    var returnVal = false;
    for (var i = 0; i < profanities.length; i++) {
        if(text.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}

function snackbar(text){
    var snackbar = document.getElementById("messageSnackbar");
    snackbar.innerText = text;
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}
