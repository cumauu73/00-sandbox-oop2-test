const Pet = require('./Pet')

class Cat extends Pet {
    constructor(name,age, breed) {
        super(name,age,breed)
    }

    getNumLives() {
        return 9
    }
}

module.exports = Cat