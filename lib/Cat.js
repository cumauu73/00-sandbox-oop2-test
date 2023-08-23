const Animal = require('./Animal')

class Cat extends Animal {
    numLives = 9

    constructor(name, sound, age, breed) {
        super(age, breed)
        this.name = name
        this.sound = sound
    }

    makeSound() {
        console.log(this.sound)
        return this.sound
    }
    getNumLives() {
        return this.numLives
    }

loseLife() {
    this.numLives--
}
}

module.exports = Cat