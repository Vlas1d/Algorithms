/*
function quickSort(array) {
    const stack = [{ left: 0, right: array.length - 1 }];

    while (stack.length > 0) {
        const { left, right } = stack.pop();

        if (left >= right) {
            continue;
        }

        const pivotIndex = partition(array, left, right);
        stack.push({ left: left, right: pivotIndex - 1 });
        stack.push({ left: pivotIndex + 1, right: right });
    }

    return array;
}

function partition(array, left, right) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j <= right - 1; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, right);
    return i + 1;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
*/

function quicksort(array: number[]): number[] {

    return
}

const array_1 = [/* your array of 700000 elements */];
for (let i = 0; i < 100; i++) {
    array_1.push(Math.floor(Math.random() * 100));
}
console.time('qsort');
const sortedArray = quicksort(array_1);
console.timeEnd('qsort');
console.log(sortedArray);