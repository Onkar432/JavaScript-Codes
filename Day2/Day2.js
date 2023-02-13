//Ternary opearator
// var age=2
// console.log((age>18)? "You can vote":"You can't vote")

//Switch Statements

// var area = "dsfdf"
// switch (area) {
//     case "circle":
//         console.log("Area of circle is:PI*R*R")
//         break;
//     case "Triangle":
//         console.log("Area of Triangle is:L*B*H")
//         break;
//     case "square":
//         console.log("Area of square is:L*B")
//         break;
//     default:
//         console.log("Plz Enter Valid Input")
// }

//While Loop

// var num=10
// while(num<=100)
// {
//     console.log(num)
//     num++
// }

//Do-While

// var num=1000
// do{
//     debugger;
//     console.log(num)
//     num++
// }while(num<=10)
// console.log(num)

//For - Loop

// var table=5;
// for(var i=1;i<=10;i++)
// {
//     console.log(table*i)
// }


//Functions

//  function Addition(){   //-->Function declaration
//     var a=10
//     var b=23
//     console.log("Addition is:"+(a+b))
// }
// Addition()  //-->Function Calling 

//parameterized function

// function add(a,b){
//     total=a+b;
//     console.log("Addition is:"+total);
// }
// add(10,20);   //passed values are parameters
// add(103,20);
// add(102,20);


// Modern Javascript

// 1.Let vs Var

// function biodata() {
//     let firstName = "Onkar"
    
//     console.log(firstName)
//     if (true) {
//         let lastName = "pathak"
//         console.log("inner "+lastName)
//         console.log("inner "+firstName)
//     }
//     console.log("innerouter "+firstName)
//     console.log("innerouter "+lastName)    //it is valid in only if block not for this  
// }
// biodata()                                    

// 2.Template Literals

// let num=10
// for(let i=1;i<=10;i++)
// {
//     console.log(`${num} * ${i} =${num*i}`)
// }

// 3.default function

// function mult(a,b=4){
//     return a*b;
// }
// console.log(mult(3))

//Arrow function
const sum=()=>{
    let a=10,b=10,c=10
    return `The sum of three numbers:${a+b+c}`
}
console.log(sum())




