const inputElement = document.getElementById('input') as HTMLInputElement;
const buttonElement = document.getElementById('button') as HTMLInputElement;

let arr_1: number[] = [];
let step: number = 1;

buttonElement.addEventListener('click', () => {
    switch (step) {
        case 1: {
            createArray(parseInt(inputElement.value));
            step++;
        } break;
        case 2: {
            searchElement(parseInt(inputElement.value));
        } break;
        default: break;
    }
});

function createArray(length: number): void {
    for (let i = 0; i < length; i++) {
        arr_1.push(Math.floor(Math.random() * 100));
    }
    console.log(arr_1);
}

function searchElement(number: number): void {
    if (!arr_1.includes(number)) {
        console.log('Element not found');
    }
    else {
        let i = 0;
        arr_1.findIndex((element, index) => {
            if (element === number) {
                console.log(`Steps: ${i}`);
                console.log(`Index '${element}: ${index}`);
            }
            i++;
        });

    }
}