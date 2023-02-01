var numbers = [45, 68, 78, 56, 89, 98]

// 1.get element by index
// console.log(numbers)
// console.log(numbers[0])
// console.log(numbers[3])
// console.log(numbers[2])

var element = numbers[1];
console.log(element);
// numbers[1] = 77;
console.log(numbers);
// 2.set element value by index
numbers[1] = 77;
numbers[3] = 44;

console.log(numbers);

// 3.find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
console.log(numbers.indexOf(89));

var positionIndex = numbers.indexOf(188);
console.log(positionIndex);
