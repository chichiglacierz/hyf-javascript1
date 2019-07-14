//#9. New car function that prints out "a green new bike" .Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
let addMoreVehicles = ['motorbike', 'caravan', 'bike', 'truck'];
function vehicle(color, type, age){
    let newVehicle
    let vehAge;
    if (type ===3 && age ===1){
        newVehicle = addMoreVehicles = [2];
    }
    console.log('A ' + color + ' '+ vehAge + ' '+ newVehicle );
}
vehicle('green', 3, 1);