/**
 * The User class, having userName property.
 * @class UserClass
**/
var UserClass = (function () {
    function UserClass() {
    }
    Object.defineProperty(UserClass.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (newUserName) {
            var validUser = newUserName.match(/^[0-9a-zA-Z]+$/);
            if (validUser) {
                this._userName = newUserName;
            }
            else {
                console.log("Error: User Name should only contain characters and numbers");
            }
        },
        enumerable: true,
        configurable: true
    });
    return UserClass;
}());
var user1 = new UserClass; // New user object created.
user1.userName = "Rajendhar123"; // Calling display method to get message.
console.log(user1.userName);
