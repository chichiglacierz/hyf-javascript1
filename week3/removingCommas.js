//1:
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
let newString = myString.length;
console.log(newString);

//removing commas and replacing with spaces was a bit tricky to do
//by using replace and defining it I could be able to remove the commas and put spaces there instead.

myString.replace(/,/g, '');
console.log(myString);