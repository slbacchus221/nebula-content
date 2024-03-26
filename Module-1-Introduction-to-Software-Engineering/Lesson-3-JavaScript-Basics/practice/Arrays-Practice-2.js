// Given the following list:
// Change the element at index zero to equal itself times 10 
const numArr = [1,2,3,4,5];
numArr[0] = numArr[0] *10 
console.log(numArr)


// Add an additional element to the prior array
numArr.push(6)
console.log(numArr)



// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = numArr.pop()
console.log(removedItem)


// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

if(numArr.indexOf(2) >= 0){
    console.log(true)
    }else{ 
     console.log(false)
    }
 //OR

 numArr.indexOf(2) >=0? console.log(true) : console.log(false)
//OR

console.log(numArr.includes(2))

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift()
console.log(removedFirstItem)

// Add that item back
numArr.unshift(removedFirstItem)
console.log(numArr)

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
console.log(sortThis.sort())


// Now reverse the prior array
console.log(sortThis.reverse())

  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

const favFoods = "My favorite foods are fried shrimp, lobster and baked clams"
const strArr = favFoods.split(' ')
console.log(strArr)

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
const sentence1myFavfoods = 'My-favorite-foods-are-fried-shrimp-lobster-and-baked-clams'
const splitStringArr = sentence1.split("-")
console.log(splitStringArr)


// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
const strDashes = strArr.join('-')
console.log( )

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
let arr = [1,2,3,4,5,7,8,9,10]
arr.splice(5,0,6)
    console.log(arr)

// Create two arrays and, using JavaScript join them together
let arr1 = ["dog", "cat", "bird"]
let arr2 = ['whale', 'shark', 'seal']

let animals = arr1.concat(arr2)
const newArray = [...arr1,...arr2]

// Create a multi-dimensional array


const multi = [[1,2,3],[4,5,6],[7,8,9]]