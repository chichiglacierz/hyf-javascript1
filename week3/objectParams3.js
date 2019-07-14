//#3:Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let country1 = {
    name : 'Sweden',
    capital : 'Stockholm',
    language : 'swedish'
}
let region1 = {
    where : 'Europe',
    region : 'Scandinavia',
    population : '9 million'
}

function printCountry(country){
    console.log(country);
}
function printRegion(region){
    console.log(region)
}
printCountry(country1);
printRegion(region1);