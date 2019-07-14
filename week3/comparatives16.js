//#16: //Take a look at the following code:

//let o1 = { foo: "bar" };
//let o2 = { foo: "bar" };
//let o3 = o2;
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

//Does the order that you assign (o3 = o2 or o2 = o3) matter?

let o1 = { foo: "bar" };
let o2 = { foo: "bars" };
let o3 = o2;

o2.bar = 'cafe';
console.log(o3 = o2);//changing o2 will affect o3 yet o3 is practically referencing the variable o2. Chnaging o2 will change o3.
console.log(o3 = o1);// o1 doesnt affect 03 at all since they are totally different variable names.
console.log(o2 = o3);//the order that I assing the variables doesn´t matter.
