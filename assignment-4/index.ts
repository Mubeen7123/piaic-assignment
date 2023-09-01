////1.create a function that takes an array an index and a value as perameters. inside the functon use the splice method to insert the value  at the specified index in the  array. return the modified array.
// let array:number[] = [1,2,3,4,6,8];
// let index:number = 5;
// let value:number = 7;
// function arrayIndexValue(array:number [],index:number,value:number)
// {
//     array.splice (index,0,value)
//     return array

// }
// var modifyArray:number[]=arrayIndexValue(array,index,value)
// console.log(modifyArray);
////
//2.implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//Create functions to add items
// let shoppingAddCart:string[] = ["Fruits","Vegitable","stationary"]
// shoppingAddCart.splice(2,0,"eggs");

// console.log("add Item",shoppingAddCart);
// //Create functions to remove items
// let shoppingRemovecart:number[]= [15,1122,103,1218]
// shoppingRemovecart.splice(0,1,111)
// console.log("remove",shoppingRemovecart);
// //Create functions to update quantities 
// let updateQuantities:string[]= ["chair","table","fan","oven,LCD"]
// updateQuantities.splice(4,0,"wall clock","lights")
// console.log("update",updateQuantities);
//// 3.Write a program that uses a while loop to print the first 25 integers.
// let num:number = 1;
// while (num<=25) {
//     console.log(num);
//     num++
// }
// ////4.Write a program that uses a while loop to print the first 10 even numbers
// let i:number = 1;
// while (i<=10) {
//  let result:number = i *2;
// console.log(result);

// i++
// }
////Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// function integar(n:number) {
//     if (n<0) {
//         console.log("Factorial is not define for -v numbers");
//     }
//     else if (n==0) {
//         console.log("1");
//     }
//     else{

//     }
// } 
//Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let indexArray:number[]=[-3,-1,-1,1,-2,3,4,5,]
console.log(`all arrays number ${indexArray}`);
for (let i:number = 0; i<indexArray.length;i++) {
    if (indexArray[i]<0) {
        indexArray.splice(i,1)
  
   
    }
    
}
 console.log(indexArray);

 ////Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let index= [5,10,15,20,25,30,];
function sum(num:number[]){
    let i=0;
    let sum = 0;
    while (i<index.length) {
        sum=sum+index[i];   
        i++
    }
    return sum;
}
//// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let temperature = [20,30,40,50,60];
var fahrenhiet:number []= [];
function InFahreniet(temperature:number[],fahrenhiet:number[]) {
let i = 0;
while (i<temperature.length) {
    fahrenhiet[i]=(temperature[i]* 9/5)+32;
    i++
}    
}
InFahreniet(temperature,fahrenhiet)
console.log(`Temprature list After Conversion ${fahrenhiet}`);


