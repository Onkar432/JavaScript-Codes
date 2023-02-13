let currDate=new Date()
console.log(currDate)     //gives in standard manner

console.log(currDate.toLocaleDateString())  //gives date only
console.log(currDate.toLocaleString())      //gives both

console. log(Date. now())  //from 1970 in millisecond

let dateSpecified=Date(2023,0,25,18,30,45)
console.log (dateSpecified)

let d=new Date("Jan 26,2023 7:15:00")
console.log(d.toLocaleString())