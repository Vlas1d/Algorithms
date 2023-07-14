function quicksort(array: number[]): number[] {
    // Базовий випадок: якщо масив містить менше двох елементів, він вже відсортований
    if (array.length < 2) {
        return array;
    }

    // Вибираємо опорний елемент (pivot)
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];

    // Розбиваємо масив на дві підмасиви: елементи менші за опорний і елементи більші за опорний
    const less = [];
    const greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue; // Пропускаємо опорний елемент
        }
        if (array[i] <= pivot) {

            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    // Рекурсивно сортуємо підмасиви
    const sortedLess = quicksort(less);
    const sortedGreater = quicksort(greater);

    // Повертаємо поєднаний результат: менший підмасив, опорний елемент і більший підмасив
    return sortedLess.concat(pivot, sortedGreater);
}

// Приклад використання
const unsortedArray = [];

for (let i = 0; i < 700000; i++) {
    unsortedArray.push(Math.floor(Math.random() * 100));
}
console.time('sss');
const sortedArray = quicksort(unsortedArray);
console.timeEnd('sss');
console.log(sortedArray); // [1, 2, 3, 5, 7, 8]