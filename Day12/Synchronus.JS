//Function run one by one 
//1st work=10 sec
//2nd work= 2 sec
//By synchronus programming 1st work will finish and then 
//2nd work will be completed.
// This is example of synchronus programing
/*function func1(){
    console.log("I am first function")
}

function func2(){
    console.log("I am second Function")
    func1();
    console.log("I am second Function")

}
func2();*/

//............ASYNCHRONUS PROGRAMMING IN JAVASCRIPT


/*Now after call to func2() it will print 1st console part and then control is transfer to func1,But it have waiting time of 2 sec so it will back again and proceed the next operation and move to that part after 2 sec and perform that activity.*/
/*function func1(){

   setTimeout(() => {
    console.log("I am first function")
   }, 2000);
}

function func2(){
    console.log("I am second Function")
    func1();
    console.log("I am second Function")

}
func2();*/


/*....................Function Currying.................
Function curring:- instead of taking all arguments at one
first one and return a new function that takes the second
 a new function which takes the third one, and so forth,
nts have been fulfilled.
*/

/*function sum(num1){
    console.log(num1)
}
sum(5)(3)(4)  //This will give only o/p:-5 with error*/

//This is function curring call goes from child to parent as closure
/*function sum(num1) {
    return function (num2) {
        return function (num3) {
            console.log(`Sum of three numbers is: ${num1 + num2 + num3} `)
        }
    }
}
sum(5)(3)(4);*/

//This can be done in single line as folllows
/*const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

sum(5)(3)(4);*/

// // 8️: CallBack Hell 

/*setTimeout(()=>{
    console.log(`1️⃣ works is done`);    
    setTimeout(()=>{
        console.log(`2️⃣ works is done`); 
        setTimeout(()=>{
            console.log(`3️⃣ works is done`);  
            setTimeout(()=>{
                console.log(`4️⃣ works is done`); 
                setTimeout(()=>{
                    console.log(`5️⃣ works is done`);   
                    setTimeout(()=>{
                        console.log(`6️⃣ works is done`);    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)
console.log("This will print the console message with 1 sec time gap,It will create s wrong sense somtime to overcomefrom this problem concept of promise{We will see later} introdunced in javascript")
*/























