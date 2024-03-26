// Declare an empty array
const emptyArr = []
console.log(emptyArr)

// Declare an array with all the data types you can think of within it
const datatypes = [[1,2,3], "I like cupcakes"] 

// Make a list of classmates names first names in an array
// Get the length of that previous array
const classMates = ["Garry", "Michael", "Christopher", "Hashem", "Rolando", "Craig", "Raffaello", "Sharon"]
console.log(classMates)
// Check the type of the previous array

console.log(typeof(classMates))

// Check if the previous array is an array

Array.isArray(classMates) // true


// Using indexing, grab your name from that previous array
console.log(classMates.index-1)

// Use the following variable to get the student at the index from the array of students
const index = 2;
const Chris = classMates[2] 


// Update the array to have each element as a students first and last name : 'firstName lastName'
classMates[0] = "Garry Garnett";
classMates[1] = "Hashem Cruz";
classMates[2] = "Michael Richman";
classMates[3] = "Rafaello Sosnowski";
classMates[4] = "Rolando Piche";
classMates[5] = "Craig Schechtman";
classMates[6] = "Christopher Foster";
classMates[7] = "Sharon Bacchus";
