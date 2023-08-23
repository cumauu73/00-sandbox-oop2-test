const {Cat, Dog} = require('./lib/')

//institation
const mabel = new Dog('mabel', 1, 'old english dog')
const alpha = new Dog('alpha', 3, 'teriior pitbull')
const bruno = new Dog('bruno', 1.5, 'terrior pitbull')
const ivy = new Cat('ivy', 9, 'long haired tabby')

console.log(mabel.getNumLives())
console.log(alpha.getNumLives())
console.log(bruno.getNumLives())
console.log(ivy.getNumLives())