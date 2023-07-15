function quickSort_(array) {
    if (array.length < 2) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const less = [];
    const greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] <= pivot) {
            less.push(array[i]);
        }
        else {
            greater.push(array[i]);
        }
    }
    const sortedLess = quickSort_(less);
    const sortedGreater = quickSort_(greater);
    return sortedLess.concat(pivot, sortedGreater);
}
const array_1 = [];
for (let i = 0; i < 10000; i++) {
    array_1.push(Math.floor(Math.random() * 100));
}
console.time('Sort');
const sortedArray = quickSort_(array_1);
console.timeEnd('Sort');
console.log(sortedArray);
//# sourceMappingURL=test.js.map