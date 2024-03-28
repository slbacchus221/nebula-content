// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
const limit = 31;
for(let i = 0; i < limit; i++) {
  console.log[i]      
}


// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
const limit2 = 10
for(let i = 1; i <= 10; i+= 2) {
    console.log[i];
}
        


// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

const celebrity = ["Jennifer Lopez", "Taylor Swift", "Paris Hilton", "Kayne West", "Will Smith"]

for(let i = 0; i <= celebrity.length; i++){
    const firstLast = celebrity[i]
    console.log(celebrity)
}
        


// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console


for(let i = 0; i <= celebrity.length; i++){
    const firstLast = celebrity[i]
    if(firstLast % 2 === 2[i])
    console.log(celebrityName)
}
   

// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names
const names = ["Jennifer Lopez", "Taylor Swift", "Paris Hilton", "Kayne West", "Will Smith"]
const firstName = [];

for(let i = 0; i < names.length; i++){
    const firstName = names[i].split(' '); 
    if(firstName ==='0'){
}
    
     
}

console.log(firstName)

// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
const names1 = ["Jennifer Lopez", "Taylor Swift", "Paris Hilton", "Kayne West", "Will Smith"]
const lastName = [];

for(let i = 0; i < names.length; i++){
    const lastName = names[i].split(' '); 
    if(lastName[i] ==='0'){
}
    
     
}

console.log(lastName)


// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console

const names2 = ["Jennifer Lopez", "Taylor Swift", "Paris Hilton", "Kayne West", "Will Smith"]

for(let i = 0; i < names.length; i++){
    const currentName = names2[i].toLowerCase();
    console.log(`Vowels in ${names2[i]}:`);

    
        }
    console.log(names2)



// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
const names3 = ["Jennifer Lopez", "Taylor Swift", "Paris Hilton", "Kayne West", "Will Smith"]

for(let i = 0; i < names.length; i++){
    const Uppercase = names3[i].split(' ');
    if(Uppercase[i] ==='0'){
  
    
        }
    }

console.log(`UpperCase${names3[i]}:`);

// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

const names4 = ["Jennifer Lopez", "Taylor Swift", "Paris Hilton", "Kayne West", "Will Smith"]

const namesInCapsNoSpace = [];
for (let i = 0; i < names.length; i++) {
    const name =names[i].Upppercase().replace(/\a/z," ");
    namesInCapsNoSpace.push(name);

}
console.log(namesInCapsNoSpace)

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

const favPerson = celebrity[1]
console.log(`My favorite celebrity is ${favPerson}`)



//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
