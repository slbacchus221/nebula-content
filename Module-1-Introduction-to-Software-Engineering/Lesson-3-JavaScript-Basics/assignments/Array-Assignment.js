// 1.   Create an array that contains two of your favorite things to do
let arrOfThings = ["shopping, traveling",]
console.log(arrOfThings)

// 2.   Using an array method, add another thing you like to do to that list
arrOfThings.push("dancing")
console.log(arrOfThings)

// 3.   Reverse the order of the array (remember, if needed use MDN)
arrOfThings.reverse()
console.log(arrOfThings)




//      Use this array for questions 4-11:
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
console.log(daysOfWeek.length[3])

// 5.   log the 4th element in the array

console.log(daysOfWeek[3])

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const removedFirstItem = daysOfWeek.shift() 
console.log(daysOfWeek)


// 7.   Put 'Sunday' back at the beginning of the array and log the new array
daysOfWeek.unshift(firstRemoved)
console.log(daysOfWeek)

// 8.   Remove the last element in the array. Log the new array and log the element removed

const lastRemoved = daysOfWeek.pop()
console.log(daysOfWeek, lastRemoved)

// 9.   Add 'Saturday' back to the end of the array and log the new array
daysOfWeek.push(lastRemoved)
console.log(daysOfWeek)

//10.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek[4] = 'Friday Junior'


//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favDay = daysOfWeek[6]
console.log(`My favorite day of the week is ${favDay}`)


//12.   Combine these two arrays
    let phone = ['iphone', 'android']
    let laptop = ['MacBook', 'HP', 'Dell']

    
console.log(phone.concat(laptop))

const newArray = [...phone,...laptop]
console.log(newArray)



//13.   Write a line of code to test if something is an array or not

if(Array.isArray(checkArr)){
    console.log("Its an Array")
}else{
    console.log("Not an Array")
}
