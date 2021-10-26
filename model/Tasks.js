let ids = 0;
let tasks = [];

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

module.exports = {
    new(name) {
        if (!this.getNomeRepetido(name)) {
            let task = {id: ++ids, name: name};
            tasks.push(task);
            return task;
        }
    },
    list() {
        return tasks;
    },
    getPositionById(id) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].id === id) {
                return i;
            }
        }
        return -1;
    },
    getPositionByNome(name) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].name === name) {
                return i;
            }
        }
        return -1;
    },
    getNomeRepetido(name) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].name === name) {
                return true;
            }
        }
        return false;
    },
    delete(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            tasks.splice(i, 1);
            return true;
        }
        return false; 
    },
    edit(name, newName){
        let i = this.getPositionByNome(name);
        if (i >= 0) {
            tasks.insert(i, name)
            return true;
        }
        return false;
    }
}