//1- write a program that calculate the area of a triangle.
var lenght:number=20;
var width:number=30;
var area:number= lenght*width;
console.log("Area of a triangle = "+ area);

//2- write a progarm that calculates the volume of a cube.
var lenghtofcube:number=20;
var widthofcube:number=30;
var heightofcube:number=5;
var volume:number= lenghtofcube*widthofcube*heightofcube;
console.log("Volume of a cube = "+ volume);

//3-write a program that checks if the givennumber is positive ,negative or zero.

var givennumber:number= 22;
if(givennumber<0){
    console.log("given number is negative.");
}
else if(givennumber>0){
    console.log("given number is positive.");
}
else{
    console.log("given number is zero.");
}

//4- write a program that checks if a givennumber is even or odd.
 var number:number=35;
 if(number/2==0){
    console.log("Number is even.");
}
else {
    console.log("Number is odd.");
}
//5- write a program that  determines if a person determine is eligible to vote based on the age.
var age:number=18;
if (age=18){
    console.log("eligible to vote.");

} 
else {
    console.log("ineligible to vote.");
}

//6-Write a program that calculate the result of a mathematical expression ((10+5)*3-2/(4%3)-7).
 var a:number =(10+5)*3-2;
 var b:number = (4%3)-7;
 var result:number= a/b;
 console.log("result ="+ result);
