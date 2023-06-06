interface User {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: string
   // startTrail: () => string
   startTrail(): string
   getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = {dbId: 22, email: "h@h.com",
role: "admin",
userId: 2211,
 githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (_name: "hitseh10", _off: 10) => {
    return 10 
}
}