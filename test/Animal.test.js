const { Animal } = require('../lib')

//test suite
describe('Animal Class', () => {
    it('our animal get correct age', () => {
        //arrange
        const age = 10
        const breed = 'tabby'
        //Act
        const animal = new Animal(age, breed)
        //Assert
        expect(animal.age).toBe(age)
    })
    it('our animal get correct breed', () => {
         //arrange
         const age = 10
         const breed = 'tabby'
         //Act
         const animal = new Animal(age, breed)
         //Assert
         expect(animal.breed).toBe(breed)
    })
    it('decrament hungerlevel by timepass 1', () => {
         //arrange
         const age = 10
         const breed = 'tabby'
         //Act
         const animal = new Animal(age, breed)
         animal.timePasses()
         //assert
         expect(animal.hungerLevel).toBe(99)
    })

    it('increase hungerlevel by timepass 1', () => {
         //arrange
         const age = 10
         const breed = 'tabby'
         //Act
         const animal = new Animal(age, breed)
         animal.eat()
         //assert
         expect(animal.hungerLevel).toBe(101)
    })
})