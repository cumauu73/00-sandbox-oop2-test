class Animal {
    hungerLevel = 100

    constructor(age, breed) {
        this.age = age
        this.breed = breed
    }

    timePasses() {
        this.hungerLevel--
    }

    eat() {
        this.hungerLevel++
    }
}

module.exports = Animal