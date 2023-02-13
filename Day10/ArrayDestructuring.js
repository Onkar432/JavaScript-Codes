// Destructuring ES6

// const myBiodata=['onkar','pathak',21];

/*let myFName=myBiodata[0];

let myLName=myBiodata[1];

let Age=myBiodata[2];

console.log(Age);*/

// Suppose we have 100 Element then we have to erite 100 time let and the console
// to overcome from this problem, This Array destructuring is introduced

/*let [myFName,myLName,Age] =myBiodata;
console.log(myFName);*/

// -->sequnce in which we are assingning the value is matters a lot 
// if we chage order as Age is at first position and myFName is at last then values also be change

/*ex:- is as below code
let [Age,myLName,myFName] =myBiodata;
console.log(myFName);*/

// we can add values also 
/*let [myFName,myLName,Age,myDegree="B.E"] =myBiodata;
console.log(myFName);
console.log(myDegree);*/

/*................OBJECT DESTRUNCTURING......... */

/*mydata={
    name:"Onkar Pathak",
    age:21,
    location:"pune"
}
let location=mydata.location;
console.log(location)
//to access the only values of the object we can use following method 
console.log(Object.values(mydata));*/

//THIS IS SO HECTIC WORK TO WRITE OBJECT NAME AND THEN ACCESS DATA .TO OVERCOME THIS PROBLEM OBJECT DESTRUNCTURING IS INVENTES IN JAVASCRIPT

/*mydata={
    naam:"Onkar Pathak",
    age:21,
    location:"pune"
}

let {naam,age,location}=mydata;
console.log(naam)
console.log(age)*/

/*.............Object propertise */

// 1>Dynamic  declaration
/*let myName='Onkar';
let myBiodata={
    myName:"My name is onkar",
    myAge:21
}
console.log(myBiodata)*/
//here is myname is showing,to change myName with give value 
//it is as follows 

/*let myName='Onkar';
let myBiodata={
    myName:"My name is onkar",
    myAge:21
}
console.log(myBiodata)*/

// .........................................spread operator

/*const colors=['pink','red','green','dark','sky blue']

const myFavColors=['yellow','chocolate'];
console.log(`Before spread operator: ${myFavColors}`)*/

//now we if want to add all colors from colors array then we write all color from array to favColor array to avoid this problem of repetation the spread operator is useful


/*const MyFavColors=[...colors,'yellow','chocolate'];
console.log(`After spread operator: ${MyFavColors}`)*/

// ES2018-->spread operator with object also

/*const person = { name: 'Fred', age: 87, degree : "mcs" };
const sPerson = { ...person };

console.log(person);
console.log(sPerson);*/

// JAVASCRIPT 2019-->How to fatten an array 
// converting 2d and 3d array into one dimensional array 

/*const arr = [
        ['zone_1', 'zone_2'],
        ['zone_3', 'zone_4'],
        ['zone_5', 'zone_6'],
        ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
    ];



console.log(arr.flat(Infinity));*/
//Infinity means we can flat as many array within array and array within that array also we use infinity
//if you want any specific no of flat then specify that number

//Converting object to array and again arrayObject to Object

// const obj={
// name:'Onkar',
// Lname:'Pathak',
// Age:21
// };

// let ObjToArray=Object.entries(obj)
// console.log(ObjToArray);

// let ObjToBackToObj = Object.fromEntries(ObjToArray);
// console.log(ObjToBackToObj);


// ES2020
// #1: BigInt
//.MAX_SAFE_INTEGER-->Allows maximum nuber that can be handled but when we want to perform on that one also,concept of bigInt comed in role
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log("Maximum capacity of oldNum is "+oldNum);
// console.log( "Incresed capacity by use of BIGINT By adding n at last position of both numbers:: "+9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);

//use stict-->It gives permission to run a code only if, it is well defiend 

// ES2014

// "use strict";

/*x = 3.14; 
console.log("Not giving output as x is not defiend with dataType:"+x);


"use strict";

let x = 3.14; 
console.log(" giving output as x is  defiend with dataType:"+x);*/

