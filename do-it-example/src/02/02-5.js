var add = (first, second) => {
    return first + second;
};
var add = (first, second) => first + second;
var addAndMultiple = (first, second) => ({add: first + second, mutilpy: first * second});
console.log(addAndMultiple(2,4));

function addNumber(num) {
    return function(value) {
        return num + value;
    };
}
var addNumber = num => value => num + value;
console.log(addNumber(2)(3));

class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function(first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}