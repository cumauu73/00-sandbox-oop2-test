const Animal = require('./Animal')

class Pet extends Animal {
    constructor(name, age,breed) {
        super(age,breed)
        this.name =name
    }

    run() {
        console.log(`${this.name} has the zoomies!!!`)
    }
}

module.exports = Pet