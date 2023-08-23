class Animal {
    alive = true

    constructor(age, breed) {
        this.age = age
        this.breed = breed
    }

    getNumLives() {
        return 1
    }
}

Animal.prototype.napp = function() {
    console.log(`${this.name} Zzzzzzzz`)
}

module.exports = Animal