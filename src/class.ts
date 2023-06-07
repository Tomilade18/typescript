// class User {
//    public email: string
//    private name: string
//    readonly city: string = "Abuja"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

class User {
readonly city: string = "lagos"
     constructor(
       public email: string,
       public name: string,
      // private userId: string
       ){}
 }

const tomilade = new User("h@h.com", "hitesh")
hitesh.name