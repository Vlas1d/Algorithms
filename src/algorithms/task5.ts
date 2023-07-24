const input_1 = document.getElementById('input') as HTMLInputElement;
const button_1 = document.getElementById('button') as HTMLInputElement;

const abc: string = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';

button_1.addEventListener('click', () => {
    console.log(encrypt('hello, my name is Vlad', 25));
});

function encrypt(str: string, key: number): string {
    let result: string = '';
    str.split('').forEach((element) => {
        if (abc.indexOf(element.toUpperCase()) === -1) {
            result += element;
        }
        else {
            result += abc[getIndex(element, key, false)];
        }
    });
    return result;
}

function decoding(str: string, key: number): string {
    return
}

function getIndex(letter: string, key: number, encrypted: boolean): number {
    if (abc.indexOf(letter.toUpperCase()) + key < abc.length) {
        return abc.indexOf(letter.toUpperCase()) + key;
    }
    else {
        return (abc.indexOf(letter.toUpperCase()) + key) % abc.length;
    }
}