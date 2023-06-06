interface User {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: string
   // startTrail: () => string
   startTrail(): string
   getCoupon(couponname: string, value: number): number
}

const hitesh: User = {dbId: 22, email: "h@h.com",
 userId: 2211,
startTrail: () => {
    return "trail started"
},
getCoupon: (_name: "hitseh10", _off: 10) => {
    return 10 
}
}