/*function quickSortIterative(arr: number[]): number[] {
    const stack: number[][] = [];
    stack.push([0, arr.length - 1]);

    while (stack.length) {
        const [low, high] = stack.pop()!;
        const pivotIndex = partition(arr, low, high);

        if (pivotIndex - 1 > low) {
            stack.push([low, pivotIndex - 1]);
        }

        if (pivotIndex + 1 < high) {
            stack.push([pivotIndex + 1, high]);
        }
    }

    return arr;
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}
*/

function quickSort_(array: number[]): number[] {
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
        } else {
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
console.log(sortedArray); // [1, 2, 3, 5, 8, 9]  