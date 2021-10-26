let ids = 0;
let tasks = [];

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
    get(id) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].id == id) {
                return tasks[i];
            }
        }
        return -1;
    },
    getPositionById(id) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    getNomeRepetido(name) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].name == name) {
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
    edit(id, newName){
        let i = this.getPositionById(id);
        if (i >= 0) {
            let task = {id: id, name: newName};
            tasks.splice(i, 1, task)
            return true;
        }
        return false;
    }
}