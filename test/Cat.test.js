const { Cat } = require('../lib')

describe('Cat Class', () => {
     it('our animal get correct breed', () => {
        //arrange
        const name = 'mabel'
        const sound = 'bark bark'
        const age = 10
        const breed = 'tabby'
        //Act
        const cat = new Cat(name, sound, age, breed)
        //Assert
        expect(cat.age).toBe(age)
    })
    it('our animal get correct name', () => {
         //arrange
         const name = 'mabel'
         const sound = 'meovvv'
         const age = 10
         const breed = 'tabby'
         //Act
         const cat = new Cat(name, sound, age, breed)
         //Assert
         expect(cat.breed).toBe(breed)
    })

    it('make sound with', () => {
         //arrange
         const name = 'mabel'
         const sound = 'meovvv'
         const age = 10
         const breed = 'tabby'
         //Act
         const cat = new Cat(name, sound, age, breed)
         const soundResult = cat.makeSound()
         //assert
         expect(cat.sound).toBe(sound)
         expect(soundResult).toBe(sound)
    })

    it('correctly decement numlives', () => {
        //arrange
        const name = 'mabel'
        const sound = 'meovvv'
        const age = 10
        const breed = 'tabby'
        //Act
        const cat = new Cat(name, sound, age, breed)
        cat.loseLife()
        const remainingLives = cat.getNumLives()
        //assert
        expect(remainingLives).toBe(8)
   })


    
})