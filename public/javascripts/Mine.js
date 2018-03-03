function mine(){

}

function mineOnOff(user){
    //var a = getUserMining(userID);
    if(user.mining == false)
    {
        snackbar("User: "+user.name+" begins mining");
        user.mining = true;
    }else{
        snackbar("User: "+user.name+" stops mining");
        user.mining = false;
    }
    updateUser(user);
}
