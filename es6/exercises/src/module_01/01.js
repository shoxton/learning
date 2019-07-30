class User {
    constructor(email,password) {
        this.email = email,
        this.password = password;
    }

    isAdmin() {
        return this.admin === true;
    }

}

class Admin extends User {
    constructor(email,password) {
        super(email,password);

        this.admin = true
    }
}

const user1 = new User("johndoe@example.com","johndoe123");
const adm1 = new Admin("johndoe@example.com","johndoe123");

console.log(user1.isAdmin());
console.log(adm1.isAdmin());