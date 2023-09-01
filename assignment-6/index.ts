//*write a program that uses a filter to remove all negative numbers from an array
let mixarry=[-1,2,-3,4,-5,6,-7,8,-9,10]
let positivearry:number[]= mixarry.filter((element )=>{
    if (element >= 0) {
     return element   
    }
})
console.log(positivearry);
//* Give an array of numbers [1,2,3,4,5] use the map mathods to create a new array where each number is multiplied by 2.
let arr:number []=[1,2,3,4,5];
let multipliedArr:number[] = arr.map((element)=>{
    return element * 2
})
console.log(`multiplied array ${multipliedArr}`);
//*Give an array of temprature in celcious [0,10,20,30,40]use the map method to createa new arry where each temprature is converted to fohrenheit usig the formula(celcious * 9/5)+32;
let tempratureCelcious: number[] = [0, 10, 20, 30, 40];

let fohrenheit: number[] = tempratureCelcious.map((celcious) => {
    return celcious * (9 / 5) + 32;

})
console.log(fohrenheit);
//*Give an array of strings ["Apple","Banana","Cherry","Date","Grape",] use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits:string[]=["Apple","banana","cherry","date","grape"]
let fruitsabove5Character:string[]=fruits.filter((elements)=>{
    if (elements.length > 5) {
     return elements   
    }
})
console.log(fruitsabove5Character);
//* Given an array of numbers[1,2,3,4,5,6,7,8,9,10] use the map and filter methods together to create a new array contining the squares of even numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenarray = array.map((elements) => elements ** 2).filter((elements) => {
    if (elements % 2 == 0) {
        return elements
    }
})
console.log(evenarray)
//*given an array of numbers [3,6,9,12,15,18],use the map and filter methods together to create a new array conatining the double values of odd numbers.
let OddArray = [3, 6, 9, 12, 15, 18]
let oddDoubleArray = OddArray.filter((element) => element % 2 !== 0).map((element) => element * 2, {

})

console.log(oddDoubleArray);
//*Give an array of names ["Alice","Bob","Charlie","Devid","Emily"],use the forEach Method to log each name with an exclamation mark at the end. e.g., "Alice!".
let names = ["Alice", "Bob", "Charlie", "Devid", "Emily"]
names.forEach(function (a) {
    console.log(a + "!");

})