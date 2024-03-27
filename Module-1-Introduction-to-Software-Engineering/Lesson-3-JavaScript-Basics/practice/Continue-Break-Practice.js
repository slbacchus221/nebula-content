// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'


const string = "This is a String"

let i = 0 

for(let i = 0; i < string.length; i++) {
    console.log(string[i])
    if (string[i] === "a"){
        
    break;
    }
        
}
        

// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'

let numbers = "10, 20, 100, 30, 40, 50";

for (let i = 100; i = 100; ) {
console.log(numbers);
    if(numbers[i] === 100){

        break;
    }

}

// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

const numString = ['a', 'b', 'c', 'a', 'd', 'e', '5', '10', '15', "How are you"]; // Array of letters

for (let i = 0; i < letters.length; i++) {
  for (let j = i + 1; j < letters.length; j++) {
    console.log(`${letters[i]} : ${letters[j]}`)
  }
  console.log('End of main loop')
}





