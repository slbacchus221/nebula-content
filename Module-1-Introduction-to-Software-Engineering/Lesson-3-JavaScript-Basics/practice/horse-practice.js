practice-comparison-Operators
let horseName = "CupCake";

let position = Math.ceil(Math.random() * 5) 

console.log(position)

// If position is 1, log to the console: "(Cup Cake) finished in first place!"
if(position ===1){
    console.log(`${horseName} finished in first place!`)
    
}else if(position === 2){ 
    console.log(`${horseName} finished in second place!`)
}else if(position === 3){
    console.log(`${horseName} finished in third place!`)
}
console.log("CupCake finished in first place!")

// If position is 2, log to the console: "(Cup Cake) finished in second place!"
else if ("CupCake finished in second place!"){} 
    console.log("CupCake finished in second place!")

// If position is 3, log to the console: "(Cup Cake) finished in third place!"

console.log("CupCake finished in third place!")

// If position is greater than 4, log to the console: "(Cup Cake) did not finish in the top 3."
console.log(