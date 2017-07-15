// function add(a, b) {
//     return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5,6];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

// Hi Andrew, you are 25
function greater(name,age) {
    return 'Hi ' + name +' you are ' + age;
}
console.log(greater(...person));
console.log(greater(...personTwo));



var names = ['Mike', 'Ben'];
var final = ['Andrew',...names];
//Hi Andrew

final.forEach(function(name) {
   console.log('Hi ' + name);
});