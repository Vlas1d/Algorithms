class ArraySort {
    static slice_(array: number[]): Array<number>[] {
        let temp: Array<number>[] = [];
        let i: number = 0;

        while (i < array.length) {
            temp.push(ArraySort.selectionSort(array.slice(i, i + 2)));//array.slice(i, i + 2).sort());
            i += 2;
        }

        return temp;
    }

    static sort_(a: number[], b: number[]): number[] {
        let array: number[] = [];

        while ((a.length !== 0 || b.length !== 0)) {
            if (a.length !== 0 && b.length !== 0) {
                if (a[0] >= b[0]) {
                    array.push(b[0])
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
        a = [];   //------------------------------------
        b = [];  //-----------------------------------
        return array;
    }

    static combinate_(arrays: Array<number>[]): Array<number>[] {
        let array: Array<number>[] = [];
        let i: number = 0;

        while (i < arrays.length) {
            if (arrays[i + 1]) {
                array.push(ArraySort.sort_(arrays[i], arrays[i + 1]));
            }
            else array.push(arrays[i]);
            i += 2;
        }
        i = 0;

        arrays = []; //-------------------------------------

        if (array.length > 1) {
            array = this.combinate_(array);
        }

        return array;
    }

    //---------------------------------------------------------------------------------------------------------------------------------



    //---------------------------------------------------------------------------------------------------------------------------------

    static bubbleSort(array: number[]): number[] {
        const length: number = array.length;
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

    static selectionSort(array: number[]): number[] {
        const length: number = array.length;
        for (let i = 0; i < length - 1; i++) {
            let minIndex: number = i;

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

    static insertionSort(array: number[]): number[] {
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

    static mergeSort(array: number[]): number[] {
        const sort_array: number[] = [...ArraySort.combinate_(ArraySort.slice_(array)).flat()]
        array.length = 0;

        const chunkSize = 100000;
        for (let i = 0; i < sort_array.length; i += chunkSize) {
            const chunk = sort_array.slice(i, i + chunkSize);
            array.push(...chunk);
        }

        return array;
    }

    static quickSort(array: number[]): number[] {
        const stack: number[][] = [];
        stack.push([0, array.length - 1]);

        while (stack.length) {
            const [low, high] = stack.pop();
            const pivotIndex = ArraySort.partation(array, low, high);

            if (pivotIndex - 1 > low) {
                stack.push([low, pivotIndex - 1]);
            }

            if (pivotIndex + 1 < high) {
                stack.push([pivotIndex + 1, high]);
            }
        }

        return array;
    }

    static partation(array: number[], low: number, high: number): number {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        const temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;

        return i + 1;
    }
}

//---------------------------------------------------------------------------------------------------------------

let array1: number[] = [];

for (let i = 0; i < 10000; i++) {
    array1.push(Math.floor(Math.random() * 100));
}

let array2: number[] = [...array1];
let array3: number[] = [...array1];
let array4: number[] = [...array1];
let array5: number[] = [...array1];

console.log(array4);

console.time('>>> Bubble Sort');
ArraySort.bubbleSort(array1);
console.timeEnd('>>> Bubble Sort');

console.time('>>> Selection Sort');
ArraySort.selectionSort(array2);
console.timeEnd('>>> Selection Sort');

console.time('>>> Insertion Sort');
ArraySort.insertionSort(array3);
console.timeEnd('>>> Insertion Sort');

console.time('>>> Merge Sort');
ArraySort.mergeSort(array4);
console.timeEnd('>>> Merge Sort');

console.time('>>> Quick Sort');
ArraySort.quickSort(array5);
console.timeEnd('>>> Quick Sort');

console.log(array5);