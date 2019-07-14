//#10:Use the list of vehicles to write an advertisement. 
//So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".
// (Hint: use a for loop.)
let addMoreVehicles = ['motorbike', 'caravan', 'bike', 'truck'];
let z = '';
for (let i = 0; i < addMoreVehicles.length - 1; i++) {
    z += addMoreVehicles[i] + "s, ";
}
z += 'and ' + addMoreVehicles[addMoreVehicles.length-1] + "s.";

console.log("Amazing Joe's Garage, we service " + z);
