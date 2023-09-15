"use strict";
var _a, _b;
// document.write('Assignment no 1')
document.body.style.backgroundColor = 'pink';
/*
Question 01
Vs code ,nodeJs and typescript installed
*/
/*
Question 02
store a persons name in a variable and show with a message
*/
let Name = "ali prince";
console.log(`\nHey ${Name.toUpperCase()},Would u like to learn some more Typescript today.`);
/*
Question 03
store a persons name and show it in upper,lower and titled case
*/
let NameOfPerson = "ali prince";
// function toTitleCase(str:string){
//         return str.replace(
//             /\w\S*/g,
//             (txt) => txt.charAt(0).toUpperCase()+txt.substring(1).toLowerCase()
//         );
//     }
console.log(`Your name in upper Case is : ${NameOfPerson.toUpperCase()}`);
console.log(`Your name in lower Case is : ${NameOfPerson.toLowerCase()}`);
console.log(`Your name in titled Case is :${toTitleCase(NameOfPerson)}`);
/*
Question 04
Print a famous quote and name of its author in a single  message
*/
let NameOfAuthor = 'albert einstein';
let quote = "A persom who never made a mistake,Never tried anything new.";
console.log(`Years ago ${toTitleCase(`${NameOfAuthor}`)} said, ` + quote);
/*
Question 05
Repeat Q4 using famous_name as and show output
*/
let famous_person = 'imran khan';
let message = "You don't lose untill you give up trying to get you succeed.";
console.log(`${toTitleCase(famous_person)} once said ` + `"${message}"`);
/*
Question 06
store a name with whitespace characters and show name before and after stripping whitespace characters
*/
let nameWithSpaces = 'ali\nhamza\t';
console.log(nameWithSpaces);
let nameWithoutSpaces = nameWithSpaces.replace(/\s+/g, "");
console.log(nameWithoutSpaces);
/*
Question 07
show result after addition,subtraction and division in print statements
*/
let a = 5;
let b = 3;
let c = 11;
let d = 4;
console.log(`The sum is = ${a + b},the subtraction is = ${c - b},the division is = ${((b * c - 1) / d)},the multiplication is = ${d * (b - 1)}`);
/*
Question 08
show four lines each time showing number 8
*/
for (let index = 0; index < 4; index++) {
    console.log(5 + 3);
    console.log('--------------------------------------------------------------------------------------------------------------------------------');
}
/*
Question 09
 store your favourite number and show with message that it is your favourite number
*/
let favourite_Number = 3;
let messageToShow = `${favourite_Number}rd is my  favourite number.`;
console.log(messageToShow);
/*
Question 10
Add comments in your question to specify the things
*/
//Going to create a variable
let Num = 3; //here Num is number type variable holding 3 digit in it
/*
Question 11
Store some of your friends names in array and print each name
*/
const names = ['Ali', 'Hamza', 'Prince', 'Ghost'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + ' ');
}
/*
Question 12
use the pre defined array and print each name with a greeting message
*/
let messge = 'Would you like to join us, ';
for (let i = 0; i < names.length; i++) {
    console.log(`Greetings ${names[i].toUpperCase()}! ` + messge);
}
/*
Question 13
Store your favorite mode of transportation such as bikes and print a statement as I LIKE To RIde Yamaha
*/
const bikes = ['Yamaha R1', 'BMW S1000RR', 'Honda CBR', 'Triumph Rocket'];
let statement1 = 'I would like to own ';
let statement2 = 'I would like to ride ';
let statement3 = 'I am a big fan of ';
let statement4 = 'And i like to buy ';
const statements = [statement1, statement2, statement3, statement4];
for (let index = 0; index < bikes.length; index++) {
    console.log(statements[index] + bikes[index] + " ");
}
/*
Question 14
Make a list of persons you like to invite for a dinner
*/
const invitedPersons = ['Ali', 'Hamza', 'Prince'];
let message1 = "Hope so you are doing great.Today is a special day and i would like to invite you for a delicious dinner tonight,and i hope u'll join us tonight.";
console.log('!****************************************Very first Invitation*********************************************!');
for (let i = 0; i < invitedPersons.length; i++) {
    let message = `Hey ${invitedPersons[i].toUpperCase()}!,${message1}`;
    console.log(message);
    message = "";
}
/*
Question 15
You heard about someone who can't make dinner with you.Use pre defined list and print sorry for him and invite some other people you like
*/
let ab = invitedPersons.pop();
invitedPersons.push('Ghost');
console.log(`Hey ${ab === null || ab === void 0 ? void 0 : ab.toUpperCase()}!, We are sorry about your situation.Let's have dinner some other times`);
console.log(`Hey ${invitedPersons[invitedPersons.length - 1]}!,` + message1);
console.log('!*****************************************After removing a person*******************************************!');
for (let i = 0; i < invitedPersons.length; i++) {
    let message = `Hey ${invitedPersons[i].toUpperCase()}!,`;
    console.log(message + message1);
    message = "";
}
/*
Question 16
You just found a bigger dinner table so invite more persons for dinner add person at first at end and at middle of your list Use Pre defined list of persons to invite them
*/
console.log("!***************************************Found a bigger dinner**********************************************!");
// unshift to add at very first index While shift is used to remove from very first
invitedPersons.unshift('Malik Bros');
// splice to add at index(starting here is 2) middle to delete and last to add 
invitedPersons.splice(2, 0, 'Ahad');
// push and pop for adding and removing from last 
invitedPersons.push('Pr!nce');
for (let i = 0; i < invitedPersons.length; i++) {
    let message = `Hey ${invitedPersons[i].toUpperCase()}!,`;
    console.log(message + message1);
    message = "";
}
/*
Question 17
Use pre defined list and remove all guests until two remains in your list and also print sorry for all and invite remaining guests After this just remove and make sure your list is empty
*/
console.log("I'm very sorry that our dinner is re-scheduled.And for today their are only two persons invited.Thank you");
console.log('!***************************************Removed persons*******************************************!');
for (let i = invitedPersons.length - 1; i > 1; i--) {
    let message = `Hey ${(_a = invitedPersons.pop()) === null || _a === void 0 ? void 0 : _a.toUpperCase()}! `;
    console.log(message + "We are sorry that you are not invited.But we'll arrange a dinner soon.Thank you for your cooperation");
    message = "";
}
console.log('!***************************************After removing persons*******************************************!');
for (let i = 0; i < invitedPersons.length; i++) {
    let message = `Hey ${invitedPersons[i].toUpperCase()}! `;
    console.log(message + message1);
    message = "";
}
console.log('!***************************************Removed persons*******************************************!');
for (let i = invitedPersons.length; i > 0; i--) {
    let message = `${(_b = invitedPersons.pop()) === null || _b === void 0 ? void 0 : _b.toUpperCase()} is removed`;
    console.log(message);
    message = "";
}
console.log('!***************************************Final list*******************************************!');
for (let i = 0; i < invitedPersons.length; i++) {
    console.log('Your list contains ' + invitedPersons[i]);
}
/*
Question 18
Store your favourite places you like to visit in your life in an array make sure it is not in alphabetical order
1. print array in its original format
2. without modification print in alphabetical order
3. show that your array is in its original format
4. print array in reverse order without modification of original array
5. show that your array is in its original format
6. reverse order again but this time changing array order
7. reverse order again and print that array is in its original order
8. store it alphabetically order and print to make sure its order has been changed
9. Now store it reverse alphabetically order and print to make sure its order has been changed
*/
let locations = ['Seoul', 'Dhaka', 'Mumbai', 'Shingai', 'Abu dabi'];
/*1. print array in its original format*/
console.log('Locations in their original format');
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*2. without modification print in alphabetical order*/
console.log('Locations in alphabetically order without modification in array');
const arrayAlpha = locations.slice().sort();
for (let i = 0; i < arrayAlpha.length; i++) {
    console.log(arrayAlpha[i].toUpperCase());
}
/*3. show that your array is in its original format*/
console.log('Locations in their original format');
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*4. print array in reverse alphabetically order without modification of original array*/
console.log('Print array in reverse alphabetically order without modification of original array');
arrayAlpha.reverse();
for (let i = 0; i < arrayAlpha.length; i++) {
    console.log(arrayAlpha[i].toUpperCase());
}
/*5. show that your array is in its original format*/
console.log('Locations in real order');
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*6. reverse order again but this time changing array order*/
console.log('Locations reversed within order');
locations.reverse();
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*7. reverse order again and print that array is in its original order*/
console.log('Locations reversed to its original  order');
locations.reverse();
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*8. store it alphabetically order and print to make sure its order has been changed*/
console.log('Locations in alphbetically order with changing original order');
locations.sort();
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*9. Now store it reverse alphabetically order and print to make sure its order has been changed*/
console.log('Locations in reverse alphbetically order with changing original order');
locations.reverse();
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
/*
Question 19
use any program from 14 to 17 and print count of guests
*/
// un-comment any program from 14 to 17
console.log('The count of remaining guests are ' + invitedPersons.length);
/*
Question 20
Think of something you like to store in an array and then print your list
*/
let pak_places = ['Minar e Pakistan', 'Badshahi Mosque', 'Clock Tower', 'Faisal Mosque', 'Zayarat'];
console.log('The list of Pak famous places is ');
for (let i = 0; i < pak_places.length; i++) {
    console.log(i + 1 + '.' + '  ' + pak_places[i]);
}
/*
Question 21
create typescript objects and store items in it
*/
const objects = {
    Minar_e_Pakistan: 'lahore',
    Badshahi_Mosque: 'lahore',
    Clock_Tower: 'Faisalabad',
    Faisal_Mosque: 'Islamabad',
    Zayarat: 'Kashimir'
};
console.log(objects);
/*
Question 22
intertional error create an array index error in your program by yourself and then make it correct
*/
const IndexProb = ['Ali', 'Hamza', 'Prince', 'Bob', 'james', 'Nathaniel'];
let message2 = "Hope so you are doing great.Today is a special day and i would like to invite you for a delicious dinner tonight,and i hope u'll join us tonight.";
for (let i = 0; i <= IndexProb.length; i++) {
    try {
        let message = `Hey ${IndexProb[i].toUpperCase()}!,${message2}`;
        console.log(message);
        message = "";
    }
    catch (error) {
        console.log("Error occured");
    }
} //Herre is the error in array that's why the catch block is working
for (let i = 0; i < IndexProb.length; i++) {
    try {
        let message = `Hey ${IndexProb[i].toUpperCase()}!,${message2}`;
        console.log(message);
        message = "";
    }
    catch (error) {
        console.log("Error occured");
    }
} //This time everything is Good Look the catch block is not working your error is no more existed
/*
Question 23
Conditional tests write programs and predict your answer some would be true and some false
*/
const places = {
    Minar_e_Pakistan: 'lahore',
    Badshahi_Mosque: 'lahore',
    Clock_Tower: 'Faisalabad',
    Faisal_Mosque: 'Islamabad',
    Zayarat: 'Karachi'
};
//1
console.log("Is minar_e_pakistan == lahore? MY prediction is that TRUE");
console.log(places.Minar_e_Pakistan === 'lahore');
//2
console.log("Is minar_e_pakistan == Faisalabad? MY prediction is that false");
console.log(places.Minar_e_Pakistan === 'Faisalabad');
//3
console.log("Is Clock_Tower == lahore? MY prediction is that false");
console.log(places.Clock_Tower === 'lahore');
//4
console.log("Is Clock_Tower == Faisalabad? MY prediction is that TRUE");
console.log(places.Clock_Tower === 'Faisalabad');
//5
console.log("Is Badshahi_Mosque == lahore? MY prediction is that TRUE");
console.log(places.Badshahi_Mosque === 'lahore');
//6
console.log("Is Badshahi_Mosque == Islamabad? MY prediction is that false");
console.log(places.Badshahi_Mosque === 'Islamabad');
//7
console.log("Is Faisal_Mosque  == Islamabad? MY prediction is that TRUE");
console.log(places.Faisal_Mosque === 'Islamabad');
//8
console.log("Is Faisal_Mosque  == lahore? MY prediction is that false");
console.log(places.Faisal_Mosque === 'lahore');
//9
console.log("Is Zayarat == karachi? MY prediction is that TRUE");
console.log(places.Zayarat === 'Karachi');
//10
console.log("Is Zayarat == lahore? MY prediction is that false");
console.log(places.Zayarat === 'lahore');
/*Question 24*/
//
// conditions like Q23 for array chack element exists in an array or not
//
/*
Question 25
create alian_color variable and give it just green red or blue value and then assign it 5 if it is green
*/
let alian_color1 = 'Green';
if (alian_color1 == 'Green') {
    console.log('Hey the player just got 5 points');
}
let alian_color2 = 'Red';
if (alian_color2 == 'Green') {
    console.log('Hey the player just got 5 points');
}
/*
Question 26
create alian_color variable and give it just green red or blue value and then assign it 5 if it is green,else 10
*/
let alian_color = prompt('Enter a color from Red,Green and Yellow');
if (alian_color == 'Green') {
    console.log('Hey the player just got 5 points');
}
else {
    console.log('The player just got 10 points');
}
/*
Question 27
create alian_color variable and give it just green red or blue value and then assign it 5 if it is green,10 for yellow or and 15 for red
*/
if (alian_color == 'Green' || alian_color == 'green') {
    alert('Hey the player just got 5 points');
}
else if (alian_color == 'Yellow' || alian_color == 'yellow') {
    alert('The player just got 10 points');
}
else if (alian_color == 'Red' || alian_color == 'red') {
    alert('The player just got 15 points');
}
else {
    alert('You entered a wrong color');
}
/*
Question 28
write if else chain and after checking age assign child,adult and else
*/
let age = +prompt('Enter a valid age');
if (age < 2) {
    alert('The person is a baby');
}
else if (age >= 2 && age < 4) {
    alert('The person is a toddler');
}
else if (age >= 4 && age < 13) {
    alert('The person is a kid');
}
else if (age >= 13 && age < 20) {
    alert('The person is a teenager');
}
else if (age >= 20 && age < 65) {
    alert('The person is a teenager');
}
else {
    alert('The person is an elder');
}
/*
Question 29
Make an array of fruits and then check for some fruits exist in array or not
*/
const fav_fruits = ['Banana', 'Apple', 'Orange'];
for (let i = 0; i < fav_fruits.length; i++) {
    if (fav_fruits[i] == 'Banana') {
        console.log('You really like ' + fav_fruits[i]);
    }
    else if (fav_fruits[i] == 'Apple') {
        console.log('You really like ' + fav_fruits[i]);
    }
    else if (fav_fruits[i] == 'Mango') {
        console.log('You really like ' + fav_fruits[i]);
    }
    else {
        console.log('You really like  nothing');
    }
    console.log('The iteration is completed.');
}
/*
Question 30
Store different usernames in array also admin and print different statements for admin and users
*/
let usernames = ['Admin', 'Ali', 'Hamza', 'Prince'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == 'Admin') {
        console.log('Hey Admin would you like to see a report?');
    }
    else {
        console.log(`Hey ${usernames[i].toUpperCase()} thank you for logging in again`);
    }
}
/*
Question 31
Check your list(from prev question) if it is empty print a statement
*/
usernames = [];
for (let i = 0; i <= usernames.length; i++) {
    if (usernames[i] === undefined) {
        console.log('You should find new users');
    }
    else if (usernames[i] === 'Admin') {
        console.log('Hey Admin would you like to see a report?');
    }
    else {
        console.log(`Hey ${usernames[i].toUpperCase()} thank you for logging in again`);
    }
}
/*
Question 32
Make two arrays and compare for username if it already exists or not.It should be case sensitive
*/
const current_users = ['Ali', 'Hamza', 'ghost', 'Prince', 'Janu'];
const new_users = ['Ghost', 'Jani', 'Janu', 'Jaan', 'Ali'];
for (let i = 0; i < new_users.length; i++) {
    let j;
    for (j = 0; j < current_users.length; j++) {
        if (new_users[i].toUpperCase() === current_users[j].toUpperCase()) {
            break;
        }
        else {
            continue;
        }
    }
    if (j === 5) {
        j = 0;
    }
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
        console.log(`The  username(${new_users[i]}) is already been taken.Try a new one.`);
    }
    else {
        console.log(`The username(${new_users[i]}) is available.You can use it.`);
    }
}
/*
Question 33
Store numbers from 1 to 9 in an array and print with their positions as 1st,2nd,3rd and so on using if else chain
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log(1 + 'st');
    }
    else if (numbers[i] == 2) {
        console.log(2 + 'nd');
    }
    else if (numbers[i] == 3) {
        console.log(3 + 'rd');
    }
    else {
        console.log(numbers[i] + 'th');
    }
}
/*
Question 34
Store your favorite pizza's and print them then change for loop to print with a statement then add a line aat outside of loop
*/
const pizza = ['Pepproni', 'Chicken Fajita', 'Chicken Milai Boti'];
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
pizza.forEach(element => {
    console.log(`I like ${element.toUpperCase()} Pizza`);
});
console.log("I really like pizza's");
/*
Question 35
Store some pets and print each then change loop to print a statement with them and add a line at outside of loop
*/
const pets = ['Dog', 'Cat', 'Parrot'];
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}
for (let i = 0; i < pets.length; i++) {
    console.log(`I like ${pets[i].toUpperCase()}s`);
}
console.log("I really like these kinds of pets's");
function make_shirt(a) {
    //You can just call the funxtion and take size and statement here by this way
    // a.size = +prompt('Enter size')!
    // a.text = prompt('Enter text you want to print on shirt')!
    alert(`The size of shirt is ${a.size},And the text to be printed on shirt is " ${a.text.toUpperCase()} "`);
    return a;
}
make_shirt({ size: +prompt('Enter a size of shirt'), text: prompt('Enter text you want to print on shirt') });
/*
Question 37
Modify the make_shirt function so that it prints a default message for large and medium siz 'I love typescript' and accepts for small size
*/
function make_shirtLarge() {
    let a = { size: 0, text: '' };
    a.size = +prompt('Enter size of shirt');
    if (a.size > 0 && a.size <= 20) {
        a.text = prompt('Enter text you want to print on shirt');
        alert(`As your shirt is small so its size is '${a.size}' && its text is " ${a.text.toUpperCase()} "`);
        return a;
    }
    else if (a.size > 20 && a.size <= 35) {
        a.text = 'I love typescript';
        alert(`As your shirt is medium so its size is '${a.size}' && its text is " ${a.text.toUpperCase()} "`);
        return a;
    }
    else {
        a.text = 'I love typescript';
        alert(`As your shirt is large so its size is '${a.size}' && its text is " ${a.text.toUpperCase()} "`);
        return a;
    }
}
make_shirtLarge();
function describe_city(city, country = 'Pakistan') {
    console.log(`Hey,You belong to city ${city.toUpperCase()} from ${country.toUpperCase()}`);
    return { city: 'ad', country: '' };
}
describe_city('Faisalabad');
describe_city('Lahore');
describe_city('Dhaka', 'Bangladesh');
function describe_city1(city, country) {
    console.log(`"${city}, ${country}"`);
    return { city: 'ad', country: '' };
}
describe_city1('Faisalabad', 'Pakistan');
describe_city1('Lahore', 'Pakistan');
describe_city1('Dhaka', 'Bangladesh');
function make_album(album) {
    album.track = 4;
    console.log(album);
}
make_album({ artist: 'Ali', title: 'Lifeline' });
/*
Question 41
Make a magicians array than pass it through a funcxtion show magicians to show each magicians name
*/
let magicians = ['Ali', 'Hamza', 'Prince'];
magicians.forEach(element => {
    show_mag(element);
});
function show_mag(a) {
    console.log(a + ' is a magician');
    return a;
}
/*
Question 42
Modify upper program and make array to The Great magician then use show_mag function to check the changes
*/
function make_great(a) {
    return 'The Great ' + a;
}
for (let index = 0; index < magicians.length; index++) {
    magicians[index] = make_great(magicians[index]);
}
magicians.forEach(element => {
    show_mag(element);
});
/*
Question 43
Use previous function but this time use another array without changing original array of magicians
*/
magicians = ['Ali', 'Hamza', 'Prince'];
const new_mag = [];
for (let index = 0; index < magicians.length; index++) {
    new_mag[index] = make_great(magicians[index]);
}
magicians.forEach(element => {
    show_mag(element);
});
new_mag.forEach(element => {
    show_mag(element);
});
console.log('------------Check that if magicians array changed or not----------------');
magicians.forEach(element => {
    show_mag(element);
});
/*
Question 44
Make a function sandwitch and collect all info about it in an array and print summary of it
*/
const goods = [];
function call(i) {
    const val = prompt('Enter stuff you want in sandwitch.Press 0 to terminate.');
    goods[i] = val;
}
for (let i = 0; i < 10; i++) {
    if (goods[i] == null && goods[i - 1] != "0") {
        call(i);
    }
    else {
        break;
    }
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (twn) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase());
}
console.log('The summary of your choice is : ');
for (let index = 0; index < goods.length - 1; index++) {
    console.log(`${index + 1} - ` + toTitleCase(`${goods[index]}`) + '\n');
}
function infoAboutCar(a) {
    console.log(a);
}
infoAboutCar({ manufacturer: 'A', model: 'J', arguments: 7, color: 'Black', feature: 'No' });
infoAboutCar({ manufacturer: 'A', model: 'J', arguments: 7, color: 'Black' });
infoAboutCar({ manufacturer: 'B', model: 'J', arguments: 7, color: 'Black', feature: 'No' });
