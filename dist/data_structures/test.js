function quicksort(array) {
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
    const sortedLess = quicksort(less);
    const sortedGreater = quicksort(greater);
    return sortedLess.concat(pivot, sortedGreater);
}
const unsortedArray = [];
for (let i = 0; i < 700000; i++) {
    unsortedArray.push(Math.floor(Math.random() * 100));
}
console.time('sss');
const sortedArray = quicksort(unsortedArray);
console.timeEnd('sss');
console.log(sortedArray);
//# sourceMappingURL=test.js.map