let arr: Array<number> = [];
let arr1: Array<number> = [21, 22, 23, 24, 25];

console.log(`>>> Start: ${arr}`);

arr.push(1, 2, 3, 4, 5);
console.log(`>>> Push: ${arr}`);

arr.push(...arr1);
console.log(`>>> Push arr1: ${arr}`);

arr.pop();
console.log(`>>> Delete last: ${arr}`);

arr.shift();
console.log(`>>> Delete first: ${arr}`);

arr.unshift(55, 56, 57, 58, 59);
console.log(`>>> Add to begin: ${arr}`);

arr.splice(4, 5);
console.log(`>>> Delete 4, 5, 6, 7, 8 element: ${arr}`);

arr.splice(3, 0, 31, 32, 33, 34, 35);
console.log(`>>> Add elements to position 3+: ${arr}`);

let arr2: Array<number> = arr.concat(arr1);
console.log(`>>> Combination arrays: ${arr2}`);

let arr3: Array<number> = arr2.slice(2, 9);
console.log(`>>> Part: ${arr3}`);

arr3.reverse();
console.log(`>>> Reverse array: ${arr3}`);

arr3.push(31);
console.log(`>>> New array: ${arr3}`);

let a: number = arr3.indexOf(31);
let b: number = arr3.indexOf(3432);
let c: number = arr3.lastIndexOf(31);
let d: boolean = arr3.includes(44);
console.log(`>>> Index '31': ${a}`);
console.log(`>>> Index '3432': ${b}`);
console.log(`>>> Last index '31': ${c}`);
console.log(`>>> Includes '44': ${d}`);

arr3.sort((a, b) => a - b);
console.log(`>>> Sort array: ${arr3}`);

let arr4: Array<number> = arr3.filter((element) => element % 2 === 0);
console.log(`>>> Filter array: ${arr4}`);