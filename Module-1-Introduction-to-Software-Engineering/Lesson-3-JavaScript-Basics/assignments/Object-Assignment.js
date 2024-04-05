// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1.bCreate an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)

const vehicle= {
    model: "Range Rover Sport",
    color: "white",
    engine: "V6",
    length: "192.1",
    price: "120,000",
    transmission: "automatic"
    

}
console.log(vehicle)

// 2. Using dot-notation Log to the console 3 properties from the previous object
console.log(vehicle.color,vehicle.model,vehicle.engine)

// 3. Using bracket-notation Log to the console 3 properties from the previous object
console.log(vehicle["price"], vehicle["length"],["transmission"])

// 4.Try and log a property that doesn't already exist - what output do we get?

console.log(vehicle.wheels)  

// 5.Add a new key-value pair to the vehicle. 
vehicle.features = 'horsepower 542'
           

// 6. Using bracket-notation update a property on the vehicle. 
vehicle['let newSpeed'] = 220


// 7. Using dot-notation update a property on the vehicle. 
vehicle.isMessy = true


// 8. Create a method for turning your vehicle on
function startCar(){
    console.log("get ready");
    vehicle.isOn = true

}
vehicle.start = startCar
vehicle.start()
console.log(vehicle)
// 9.Create a method for turning your vehicle off
function turnOffCar(){
    console.log("The car is off");
    vehicle.isOn = false

}
vehicle.turnOffCar = turnOffCar


//10.   
// // a. Check if your vehicle is on (it should be off)
// // b. Start your vehicle
// // c. Check if your vehicle is on (it should be on)
// // d. Stop your vehicle
// // e. Check if your vehicle is on (it should be on)


if(vehicle.isOn){
    vehicle.turnOffCar()
}else{
    vehicle.start()

}


