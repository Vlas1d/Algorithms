function quicksort(array) {
    return;
}
const array_1 = [];
for (let i = 0; i < 100; i++) {
    array_1.push(Math.floor(Math.random() * 100));
}
console.time('qsort');
const sortedArray = quicksort(array_1);
console.timeEnd('qsort');
console.log(sortedArray);
//# sourceMappingURL=test.js.map