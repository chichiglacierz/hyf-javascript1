//#6:Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicleType(color, type, age){
    let vehType;
    if (type ===1){
        vehType = 'car';
    } else {
        vehType = 'motorbike';
    }
    if (age === 0 || age <= 1){
        console.log('The ' + color + ' '+ type + ' is brand new');
    } else {
        console.log('A ' + color + ' ' + 'used ' +type +'.' )
    }
}
vehicleType('green', 2, 1);
vehicleType('red', 1, 1);
vehicleType('white', 1, 4);