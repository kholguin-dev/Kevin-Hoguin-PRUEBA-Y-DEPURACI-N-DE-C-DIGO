class UserController {
    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    add(user) {
        this.users.push(user);
    }

    remove(user) {
        this.users = this.users.filter(u => u.id !== user.id);
    }

    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    findById(id) {
        return this.users.find(user => user.id === id);
    }
}

module.exports = UserController;