let ids = 0;
let users = [];

module.exports = {
    new(name, password) {
        let user = {id: ++ids, name: name, password: password};
        users.push(user);
        return user;
    },
    list() {
        return users;
    }, 
    get(id) {
        for (let i = 0; i<users.length; i++) {
            if (users[i].id == id) {
                return users[i];
            }
        }
        return -1;
    },
    getPositionById(id) {
        for (let i = 0; i<users.length; i++) {
            if (users[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    delete(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            users.splice(i, 1);
            return true;
        }
        return false; 
    },
    edit(id, newName){
        let i = this.getPositionById(id);
        if (i >= 0) {
            password = this.get(id).password;
            let user = {id: id, name: newName, password: password};
            users.splice(i, 1, user)
            return true;
        }
        return false;
    }
}