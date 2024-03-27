var User = function (firsName, lastName) {
    this.firsName = firsName;
    this.lastName = lastName;
}

User.prototype.getFirstName = function () {
    console.log(`firstName is : ${this.firsName}`);
}

var u1 = new User("raj", "patel");
if (u1.hasOwnProperty("firsName")) {
    u1.getFirstName();
}
console.log(u1);

