const Pet = require('./Pet')

class Dog extends Pet {
    constructor(name,age, breed) {
        super(name,age,breed)
    }
    }

module.exports = Dog