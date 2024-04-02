// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
const addOneToArray = (numbers) => {
    let newArray = []
    for(let i = 0; i < numbers.length; i++){
        newArray.push(numbers[i] + 1)

    }
    return newArray
}

console.log(addOneToArray([1,2,3]))


// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false

function hasLetter(happy, letter){
    for(let i = 0; i < happy.length; i++){
        if(happy[i] === letter) {
            return true
        }
    }
    return false
}

console.log(hasLetter('happy','a'))

// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]


const flName = (array) => {
    const firstName = []
    const nameList = ["Sharon Bacchus","Amber Hamid","Chris Bacchus"]   

    for (let i = 0; i < array.length; i++) {
        const currentName = array[i];
        const toArray = currentName.split(" ")

        firstName.push(toArray[0])
            }
            return fName

}


console.log(flName(nameList["Sharon Bacchus","Amber Hamid","Chris Bacchus"]))


// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"


function sayGreeting(name, greeting){
    return `${greeting}, ${name}`
}

console.log(sayGreeting("Amber", "Hello"))



// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23

function calculateAge(currentYear, birthyear){
    return currentYear - birthyear
}

console.log(calculateAge(2024,1978))


