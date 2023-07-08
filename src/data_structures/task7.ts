class ArraySort {
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
        for (let i = 0; i < length - 1; i++) {
            for (let j = 1; j < length - i; j++) {
                if (array[j] < array[j - 1]) {
                    const temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
            }
        }
        return array;
    }

    static mergeSort(arr: number[]): number[] {
        return
    }
    static quickSort(arr: number[]): number[] {
        return
    }
}

let array1: number[] = [];

for (let i = 0; i < 20; i++) {
    array1.push(Math.floor(Math.random() * 100));
}

let array2: number[] = [...array1];
let array3: number[] = [...array1];

console.time('>>> Bubble Sort');
ArraySort.bubbleSort(array1);
console.timeEnd('>>> Bubble Sort');

console.time('>>> Selection Sort');
ArraySort.selectionSort(array2);
console.timeEnd('>>> Selection Sort');

console.time('>>> Insertion Sort');
ArraySort.insertionSort(array3);
console.timeEnd('>>> Insertion Sort');

console.log(array3);



//-----------------------------------------------------------------------------------

