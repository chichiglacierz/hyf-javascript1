//#15: Write some code to test two arrays for equality using == and ===. Test the following:

//let x = [1, 2, 3];
//let y = [1, 2, 3];
//let z = y;
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!


let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

//x ==y are not the same because the arrays have been assigned to different variables even though the arrays themselves are the same
console.log(x == y);
console.log(x === y); //same assumption as above

//The following will be true since the arrays now have been assigned to a new variable that is pointing to the old variable
console.log(z==y);

//The following will be false as z hasn´t been declared and assigned to have the same value as x
z == x