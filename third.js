console.log("Loops and Functions in JS");
// let ob={
    // "name" : "Nida khan",
    // "roll no": "24H81A0536",
    // "clg" : "VRK"
// }
// for (const i in ob) {
    // if (!Object.hasOwn(ob, i)) continue;
    // 
    // const element = ob[i];
    // console.log(element)
    // 
// }

// Program to print marks of a student in object using for loop
const object={
    "studentA" : 916,
    "studentB": 846,
    "studentC": 811
}
for (const key in object) {
    
    const element = object[key];
    console.log(element)
    
    
}


//printing try again until user enters correct number
CorrectNumber=9876665
let e = prompt("Enter correct number:");
// while(e!=CorrectNumber){
    // console.log("Try again")
// }
// Function to find mean of 5 numbers
function MeanFunc(a,b,c,d,e) {
    sum=a+b+c+d+e;
    mean=sum/5
    console.log(mean)
    
}
MeanFunc(15,25,65,45,35);

