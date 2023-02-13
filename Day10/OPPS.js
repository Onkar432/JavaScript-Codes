// What is object literal ?
// -->object literal is simply a key:value pair data struncture

// -->storing variables and function in same container.
// we can refer this as an object.

// -->object is like school bag.
// array is for only same data type but object is for all data types

/*
....................1st method

let biodata={
    myName:"Onkar pathak",
    myAge:21,
    getData:function(){
    console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
    }
}
console.log(biodata.myName);
console.log(biodata.myAge);
biodata.getData();*/

//2nd Way no needto write function as well-->after es6 2015

/*let biodata={
    myName:"Onkar pathak",
    myAge:21,
    getData (){
    console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
    }
}
console.log(biodata.myName);
console.log(biodata.myAge);
biodata.getData();*/

//............Object Inside the object
/*let biodata={
     personal: {
        myName: "Onkar pathak",
        myAge: 21,
    },
   
    getData:function(){
    console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
    }
}
console.log(biodata.personal.myName);
console.log(biodata.personal.myAge);
console.log(biodata.personal);

biodata.getData();*/

//...........this object.............
// this object conatins the context of current place
let data={
   myName:"Onkar pathak",
   NaamBtao(){
 
    // console.log(this.myName);
    console.log(this.myName);
}
}

data.NaamBtao()

// this function not works for arrow function