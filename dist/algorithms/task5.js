const input_1 = document.getElementById('input');
const button_1 = document.getElementById('button');
const abc = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
button_1.addEventListener('click', () => {
    console.log(encrypt('hello, my name is Vlad', 25));
});
function encrypt(str, key) {
    let result = '';
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
function decoding(str, key) {
    return;
}
function getIndex(letter, key, encrypted) {
    if (abc.indexOf(letter.toUpperCase()) + key < abc.length) {
        return abc.indexOf(letter.toUpperCase()) + key;
    }
    else {
        return (abc.indexOf(letter.toUpperCase()) + key) % abc.length;
    }
}
//# sourceMappingURL=task5.js.map