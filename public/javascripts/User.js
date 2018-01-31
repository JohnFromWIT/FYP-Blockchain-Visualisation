function User () {
    this.firstname = "John";
    this.lastname = "O' Sullivan";
    this.getFullName = getFName;
}

function getFName() {
    return this.firstname + ' ' + this.lastname;
}

