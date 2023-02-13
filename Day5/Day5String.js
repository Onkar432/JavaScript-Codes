
                                         //Strings in javascript

/*let myName="Onkar Pathak"
console.log(myName);
console.log(`Length of string is ${myName.length}`)*/

//finding string in same string

// let myBioData="My name is onkar pathak"
// console.log(myBioData.indexOf("onkar"))

// String Slice-->Gives only that part of strng which is specified-->(start,end) -->end is excluded

/*let Fruits="Apple Banana Mango Pineapple Orange"
console. log(Fruits)

let slicedString=Fruits.slice(0,10)
console. log(slicedString);

let slicedString2=Fruits.slice(0,-1)
console. log(slicedString2);*/

//Substring -->Same as slice but not allowed -ve numbers

/*let Fruits="Apple Banana Mango Pineapple Orange"
let slicedString3=Fruits.substring(0,5)
console. log(slicedString3);

let slicedString4=Fruits.substring(0,-5)
console. log(slicedString4); //-->Not gives any output*/

//Replace string

/*let Fruits="Apple Banana Mango Pineapple Banana"
let replaceStr=Fruits.replace("Banana","Kela")
console.log("original Stirng->"+Fruits);

console.log("New Stirng->"+replaceStr);*/

//Extracting string characters
/*let Fruits="Apple Banana Mango Pineapple Orange"
console. log(Fruits.charAt(0))

//charCodeAt
console. log(Fruits.charCodeAt(0))       //-->return ascii value*/

/*let Myname="my name is onkar pathak"
console.log(Myname.toUpperCase())

let Myname2="MY NAME IS ONKAR PATHAK"
console.log(Myname2.toLowerCase())

let trimStr="       hello     world       "
console. log(trimStr.trim())*/


let str="a,b,c,d"
console.log (str. split(","))