const Animal = require('./Animal')

class Cat extends Animal {
    constructor(name,age, breed) {
        super(name,age,breed)
    }

    getNumLives() {
        return 9
    }
}

module.exports = Cat