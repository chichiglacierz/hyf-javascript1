//#11:What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
//We are able to add a new vehicle with the .push() method
let addMoreVehicles = ['motorbike', 'caravan', 'bike', 'truck'];
addMoreVehicles.push('scooter');
let z = '';
for (let i = 0; i < addMoreVehicles.length - 1; i++) {
    z += addMoreVehicles[i] + "s, ";
}
z += 'and ' + addMoreVehicles[addMoreVehicles.length-1] + "s.";

console.log("Amazing Joe's Garage, we service " + z);