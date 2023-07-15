const inputElement = document.getElementById('input');
const buttonElement = document.getElementById('button');
let arr_1 = [];
let step = 1;
buttonElement.addEventListener('click', () => {
    switch (step) {
        case 1:
            {
                createArray(parseInt(inputElement.value));
                step++;
            }
            break;
        case 2:
            {
                searchElement(parseInt(inputElement.value));
            }
            break;
        default: break;
    }
});
function createArray(length) {
    for (let i = 0; i < length; i++) {
        arr_1.push(Math.floor(Math.random() * 100));
    }
    console.log(arr_1);
}
function searchElement(number) {
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
//# sourceMappingURL=task1.js.map