var list = [0,1];
var [
    item1,
    item2,
    item3 = -1
] = list;
console.log(item1);
[item2, item1] = [item1, item2];
console.log(item1);
var obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key1: newKey1,
    key2,
    key3 = 'default key3 value',
} = obj;
console.log(newKey1);

var [item1, ...otherItems] = [0, 1, 2];
var {key1, ...others} = {key1: 'one', key2: 'two' };
console.log(otherItems);
console.log(others);