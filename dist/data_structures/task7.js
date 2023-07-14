class ArraySort {
    static slice_(array) {
        let temp = [];
        let i = 0;
        while (i < array.length) {
            temp.push(ArraySort.selectionSort(array.slice(i, i + 2)));
            i += 2;
        }
        return temp;
    }
    static sort_(a, b) {
        let array = [];
        while ((a.length !== 0 || b.length !== 0)) {
            if (a.length !== 0 && b.length !== 0) {
                if (a[0] >= b[0]) {
                    array.push(b[0]);
                    b.shift();
                }
                else {
                    array.push(a[0]);
                    a.shift();
                }
            }
            else if (a.length !== 0) {
                array.push(...a);
                a.length = 0;
            }
            else if (b.length !== 0) {
                array.push(...b);
                b.length = 0;
            }
        }
        a = [];
        b = [];
        return array;
    }
    static combinate_(arrays) {
        let array = [];
        let i = 0;
        while (i < arrays.length) {
            if (arrays[i + 1]) {
                array.push(ArraySort.sort_(arrays[i], arrays[i + 1]));
            }
            else
                array.push(arrays[i]);
            i += 2;
        }
        i = 0;
        arrays = [];
        if (array.length > 1) {
            array = this.combinate_(array);
        }
        return array;
    }
    static bubbleSort(array) {
        const length = array.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }
    static selectionSort(array) {
        const length = array.length;
        for (let i = 0; i < length - 1; i++) {
            let minIndex = i;
            for (let j = i; j < length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                const temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
        return array;
    }
    static insertionSort(array) {
        const length = array.length;
        for (let i = 1; i < length; i++) {
            for (let j = i; j > 0; j--) {
                if (array[j] <= array[j - 1]) {
                    const temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
                else {
                    break;
                }
            }
        }
        return array;
    }
    static mergeSort(array) {
        const sort_array = [...ArraySort.combinate_(ArraySort.slice_(array)).flat()];
        array.length = 0;
        const chunkSize = 100000;
        for (let i = 0; i < sort_array.length; i += chunkSize) {
            const chunk = sort_array.slice(i, i + chunkSize);
            array.push(...chunk);
        }
        return array;
    }
    static quickSort(array) {
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
        const sortedLess = ArraySort.quickSort(less);
        const sortedGreater = ArraySort.quickSort(greater);
        return sortedLess.concat(pivot, sortedGreater);
    }
}
let array1 = [];
for (let i = 0; i < 100; i++) {
    array1.push(Math.floor(Math.random() * 100));
}
let array2 = [...array1];
let array3 = [...array1];
let array4 = [...array1];
let array5 = [...array1];
console.log(array4);
console.time('>>> Bubble Sort');
console.timeEnd('>>> Bubble Sort');
console.time('>>> Selection Sort');
console.timeEnd('>>> Selection Sort');
console.time('>>> Insertion Sort');
console.timeEnd('>>> Insertion Sort');
console.time('>>> Merge Sort');
ArraySort.mergeSort(array4);
console.timeEnd('>>> Merge Sort');
console.time('>>> Quick Sort');
console.timeEnd('>>> Quick Sort');
console.log(array3);
//# sourceMappingURL=task7.js.map