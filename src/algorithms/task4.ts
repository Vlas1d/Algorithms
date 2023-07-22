const input_ = document.getElementById('input') as HTMLInputElement;
const button_ = document.getElementById('button') as HTMLInputElement;

let equation: string[];

button_.addEventListener('click', () => {
    equation = input_.value.split('');
    checkEquation();
});

function checkEquation(): void {

    for (let i = 0; i < equation.length; i++) {

    }
}