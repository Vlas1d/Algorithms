const input_ = document.getElementById('input') as HTMLInputElement;
const button_ = document.getElementById('button') as HTMLInputElement;

button_.addEventListener('click', () => {
    console.log(checkEquation(input_.value));
});

function checkEquation(str: string): string {
    const arr = str.split('');
    let openBrackets = 0;
    let closeBrackets = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') openBrackets++;
        if (arr[i] === ')') closeBrackets++;

        if (closeBrackets > openBrackets) {
            return 'Відсутні відкриваючі дужки!'
        }
    }


    if (openBrackets === closeBrackets) {
        if (openBrackets === 0) return 'Дужки відсутні!';
        return 'Дужки розставлені правильно';
    }
    else {
        return `Відсутні закриваючі дужки (${openBrackets - closeBrackets} дужки)!`;
    }
}