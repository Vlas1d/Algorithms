const input_1 = document.getElementById('input');
const button_1 = document.getElementById('button');
const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
button_1.addEventListener('click', () => {
    const arr = input_1.value.split(';');
    if (arr.length < 3)
        console.log('Must be 3 arguments: string; key(number); action(E or D)');
    else if (isNaN(parseInt(arr[1])))
        console.log('The key must be a number!');
    else if (parseInt(arr[1]) < 0)
        console.log('The key must be greater than zero!');
    else if (arr[2].toUpperCase().includes('E'))
        console.log(encrypt(arr[0], parseInt(arr[1]), false));
    else if (arr[2].toUpperCase().includes('D'))
        console.log(encrypt(arr[0], parseInt(arr[1]), true));
    else
        console.log('The action is incorrect (must be E or D)');
});
function encrypt(str, key, encrypted) {
    let result = '';
    str.split('').forEach((element) => {
        if (abc.indexOf(element.toUpperCase()) === -1) {
            result += element;
        }
        else {
            if (!encrypted)
                result += abc[getIndexEncrypt(element, key)];
            else
                result += abc[getIndexDecoding(element, key)];
        }
    });
    return result;
}
function getIndexEncrypt(letter, key) {
    if (abc.indexOf(letter.toUpperCase()) + key < abc.length) {
        return abc.indexOf(letter.toUpperCase()) + key;
    }
    else {
        return (abc.indexOf(letter.toUpperCase()) + key) % abc.length;
    }
}
function getIndexDecoding(letter, key) {
    if (abc.indexOf(letter.toUpperCase()) - key >= 0) {
        return Math.abs(abc.indexOf(letter.toUpperCase()) - key);
    }
    else {
        if (Math.abs((abc.indexOf(letter.toUpperCase()) - key) % abc.length) === 0)
            return 0;
        else
            return abc.length - Math.abs((key - abc.indexOf(letter.toUpperCase())) % abc.length);
    }
}
//# sourceMappingURL=task5.js.map