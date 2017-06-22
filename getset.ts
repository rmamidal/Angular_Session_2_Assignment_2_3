/**
 * The User class, having userName property.
 * @class UserClass
**/
class UserClass {
    private _userName: string;

    // Getter.
    get userName() :string {
        return this._userName;
    }

    // Setter.
    set userName (newUserName:string) {
        let validUser = newUserName.match(/^[0-9a-zA-Z]+$/);

        // Check for valid user.
        if(validUser) {
            this._userName = newUserName;    
        }
        else {
            console.log("Error: User Name should only contain characters and numbers");
        }
        
    }
}

var user1 = new UserClass; // New user object created.
user1.userName = "Rajendhar123"; // set methode to change username..
console.log(user1.userName); // print modified property value.