//Arrays in javascript

let myFriends=["Onkar","Sanket","Raj"]
/*console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);

console.log("Length of the array is:"+myFriends.length)

console.log("Accessingg elements through for Loop:")
for(let i=0;i<myFriends.length;i++)    //Normal for loop
{
    console.log(myFriends[i])
}*/

//for loops introduced in ES6
//1>for in
//2>for of
/*console.log("For in gives index of element")
for(element in myFriends)
{
    console.log(element)
}*/
/*console.log("For of gives element")

for(element of myFriends)
{
    console.log(element)
}*/

console.log("ForEach Loop") //Combination of above two
myFriends.forEach(function(element,index,myFriends){
    console.log(element+ " index:"+index+ " "+myFriends)
    if(index==1)
     //break ->not allowed
     console.log("Cannot use break")
})
console.log(".")
//Arrow function  ->not aloowed this keyword
console.log("ForEach Loop with array function")
myFriends.forEach((element,index,myFriends)=>{
    console.log(element+ " index:"+index+ " "+myFriends)
    
})