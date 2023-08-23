const Animal = require('./Animal')

class Dog extends Animal {
    happiness = 100

    constructor(name, sound, age, breed) {
        super(age, breed)
        this.name = name
        this.sound = sound
    }

    makeSound() {
        console.log(this.sound)
        return this.sound
    }


    }

module.exports = Dog