let arr = [10, 20, 30, 40];

console.log("Original Array:", arr);

arr.push(50);
console.log( arr);

arr.pop();
console.log( arr);

arr.unshift(5);
console.log( arr);
arr.shift();

console.log( arr);
console.log( arr.length);

let arr2 = [50, 60];
let combined = arr.concat(arr2);
console.log( combined);

let sliced = arr.slice(1, 3);
console.log( sliced);

arr.splice(1, 1, 25);
console.log( arr);

arr.reverse();
console.log( arr);

let str = arr.toString();
console.log( str);
