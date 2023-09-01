"use strict";
////Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var sum = 0;
//n=10
for (let index = 1; index <= 10; index++) {
    var result = index * 2;
    console.log("even number ", result);
    sum = sum + result;
}
console.log("sum of 1st 10 even number", sum);
////Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = [];
for (let index = 1; index < array.length; index++) {
    if (index % 2 == 0) {
        evenNumber.push(index);
    }
}
console.log(evenNumber);
////Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumber = [];
for (let index = 1; index < array.length; index++) {
    if (index % 2 != 0) {
        oddNumber.push(index);
    }
}
console.log(oddNumber);
////Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated 
function areaOfCircle(radius) {
    //A=πr2
    const pi = 3.14;
    let area = radius ** 2;
    return area;
}
console.log(`Area of circle${areaOfCircle(10)}`);
////Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let listOfGrade = [35, 51, 50, 49, 60, 80];
for (let index = 0; index < array.length; index++) {
    if (listOfGrade[index] < 50) {
        listOfGrade.splice(index, 1);
    }
}
console.log(`list after remove grade below 50 is  ${listOfGrade}`);
////Write a program that uses a function to find the largest element in an array of numbers.
let largestNumber = 1;
let arrayOfNumbers = [30, 50, 112, 70, 40, 45];
function arrayOfElements(elment) {
    for (let index = 0; index < array.length; index++) {
        if (elment[index] > largestNumber) {
            largestNumber = elment[index];
        }
    }
    return largestNumber;
}
console.log(`largest number in arraay of Numbers is ${arrayOfElements(arrayOfNumbers)}`);
