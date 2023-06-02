// type enum
// if we want to represent size of tee shirts
// we could represent it like 
// const small = 1;
// const mediun = 2;
// const large = 3;

// we could use enum
// Pascalcase
const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize)