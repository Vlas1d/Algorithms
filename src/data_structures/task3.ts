import * as readline from 'readline';

class CarNumber {

    numbers: Set<string> = new Set<string>(); //звичайний масив, проста структура якої достаньо і яка містить всі потрібні методи

    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    carNumbers(): void {
        this.rl.question('Введіть державний номер авто або дію (список/стоп): ', (value: string) => {
            switch (value.toUpperCase()) {
                case 'СПИСОК': this.getNumbers(); break;
                case 'СТОП': this.rl.close(); break;
                default: this.addNumber(value.toUpperCase()); break;
            }
            if (value.toUpperCase() != 'СТОП') this.carNumbers();
        });
    }

    private getNumbers() {
        this.numbers.forEach(number => {
            console.log(number);
        })
    }

    private addNumber(number: string) {
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