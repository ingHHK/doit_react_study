var x = 0;
var y = 0;
var obj = {x, y };
var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString] : 'some value',
};

var obj2 = {
    x,
    methodA() {console.log('method A');},
    methodB() {return 0;},
};

console.log(obj2.methodA());
console.log(obj2.methodB());