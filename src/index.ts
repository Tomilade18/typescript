// objects
//how to define a methiod in this object
//every object should have a return method
let employee: {
  readonly id: number,
    name: string,
    retire: (date: Date) => void
    
} = {id: 1,
     name: 'tomi',
    retire: (date: Date) => {
console.log(date);
    }
   };

