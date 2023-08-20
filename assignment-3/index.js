"use strict";
//1- write a program to convert the temperature  from celsius to Fahrenheit and vice verse.
var temp = 90;
var celciustofarhenheit = (temp * 9 / 5) + 32;
console.log("celcius to farhenheit = " + celciustofarhenheit);
var Fahrenheittocelsius = (temp - 32) * 5 / 9;
console.log("Fahrrnheit to celicius =" + Fahrenheittocelsius);
//2- write a program that calculates percentage.
var obtainedmarks = 60;
var totalmarks = 100;
var percentage = (obtainedmarks / totalmarks) * 100;
console.log("percentage = " + percentage);
//3-Write a program that converts given number of days in to weeks and days such 17 days= 2 weeksand 3 days.
var numberofdays = 120;
var weeks = numberofdays / 7;
var days = numberofdays % 7;
console.log(numberofdays + "days =" + weeks + "weeks" + days + "days.");
