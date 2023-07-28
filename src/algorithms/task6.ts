import { performance } from 'perf_hooks';

interface AlgSort {
    name: string;
    sort(array: number[]): number[];
}

class BubbleSort implements AlgSort {
    name = 'bubble sort';
    sort(array: number[]): number[] {
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
}

class InsertionSort implements AlgSort {
    name = 'insertion sort';
    sort(array: number[]): number[] {
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
}

class SelectionSort implements AlgSort {
    name = 'selection sort';
    sort(array: number[]): number[] {
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
}

class MergeSort implements AlgSort {
    name = 'merge sort';
    slice_(array: number[]): Array<number>[] {
        let temp: Array<number>[] = [];
        let i: number = 0;

        while (i < array.length) {
            temp.push(array.slice(i, i + 2).sort());
            i += 2;
        }

        return temp;
    }

    sorting(a: number[], b: number[]): number[] {
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

    combinate_(arrays: Array<number>[]): Array<number>[] {
        let array: Array<number>[] = [];
        let i: number = 0;

        while (i < arrays.length) {
            if (arrays[i + 1]) {
                array.push(this.sorting(arrays[i], arrays[i + 1]));
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

    sort(array: number[]): number[] {
        const sort_array: number[] = [...this.combinate_(this.slice_(array)).flat()]
        array.length = 0;

        const chunkSize = 100000;
        for (let i = 0; i < sort_array.length; i += chunkSize) {
            const chunk = sort_array.slice(i, i + chunkSize);
            array.push(...chunk);
        }

        return array;
    }
}

class QuickSort implements AlgSort {
    name = 'quick sort';
    sort(array: number[]): number[] {
        const stack: number[][] = [];
        stack.push([0, array.length - 1]);

        while (stack.length) {
            const [low, high] = stack.pop();
            const pivotIndex = this.partation(array, low, high);

            if (pivotIndex - 1 > low) {
                stack.push([low, pivotIndex - 1]);
            }

            if (pivotIndex + 1 < high) {
                stack.push([pivotIndex + 1, high]);
            }
        }

        return array;
    }

    partation(array: number[], low: number, high: number): number {
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


class Main {
    private sort_algoritms: AlgSort[] = [];
    private results: { key: string, time: number }[] = [];

    arrays: number[][] = [];

    constructor(array: number[]) {
        this.sort_algoritms = [new BubbleSort(), new InsertionSort(), new SelectionSort(), new MergeSort(), new QuickSort()];

        for (let i = 0; i < this.sort_algoritms.length; i++) {
            this.arrays.push(array.concat());
        }
    }

    main(): { key: string, time: number }[] {

        for (let i = 0; i < this.sort_algoritms.length; i++) {
            const startTime = performance.now();
            this.sort_algoritms[i].sort(this.arrays[i]);
            const endTime = performance.now();
            this.results.push({ key: this.sort_algoritms[i].name, time: Math.floor(endTime - startTime) / 1000 });
        }

        return this.results;
    }
}

let test_arr: number[] = [];

for (let i = 0; i < 250000; i++) {
    test_arr.push(Math.floor(Math.random() * 100));
}

const main = new Main(test_arr);

console.log(main.main());