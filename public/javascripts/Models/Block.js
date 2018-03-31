//------- Block Model -----------//

function Block(){
    this.blockID = "";
    this.blockNo = 0;
    this.timeStamp = new Date();
    this.findingUser = "";
    this.prevHash = "";
    this.nonce = 0;
    this.messages = [];
    this.messageHash = 48655;
    this.hash = 0x00000001;
    this.diff = networkDiff;
    this.hit = false;
}

