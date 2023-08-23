const { Dog } = require('../lib')

describe('Dog Class', () => {
     it('our animal get correct breed', () => {
        //arrange
        const name = 'mabel'
        const sound = 'bark bark'
        const age = 10
        const breed = 'pitbull'
        //Act
        const dog = new Dog(name, sound, age, breed)
        //Assert
        expect(dog.age).toBe(age)
    })
    it('our animal get correct name', () => {
         //arrange
         const name = 'mabel'
         const sound = 'woof woof'
         const age = 10
         const breed = 'pitbull'
         //Act
         const dog = new Dog(name, sound, age, breed)
         //Assert
         expect(dog.breed).toBe(breed)
    })

    it('make sound with', () => {
         //arrange
         const name = 'mabel'
         const sound = 'woof woof'
         const age = 10
         const breed = 'pitbull'
         //Act
         const dog = new Dog(name, sound, age, breed)
         const soundResult = dog.makeSound()
         //assert
         expect(dog.sound).toBe(sound)
         expect(soundResult).toBe(sound)
    })


    
})