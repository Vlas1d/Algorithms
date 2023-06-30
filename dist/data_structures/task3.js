import * as readline from 'readline';
class CarNumber {
    constructor() {
        this.numbers = new Set();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    carNumbers() {
        this.rl.question('Введіть державний номер авто або дію (список/стоп): ', (value) => {
            switch (value.toUpperCase()) {
                case 'СПИСОК':
                    this.getNumbers();
                    break;
                case 'СТОП':
                    this.rl.close();
                    break;
                default:
                    this.addNumber(value.toUpperCase());
                    break;
            }
            if (value.toUpperCase() != 'СТОП')
                this.carNumbers();
        });
    }
    getNumbers() {
        this.numbers.forEach(number => {
            console.log(number);
        });
    }
    addNumber(number) {
        if (this.numbers.has(number)) {
            console.log('Номер вже існує');
        }
        else {
            this.numbers.add(number);
        }
    }
}
const carNumber = new CarNumber();
carNumber.carNumbers();
//# sourceMappingURL=task3.js.map