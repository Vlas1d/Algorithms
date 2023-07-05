import * as readline from 'readline';

class CarNumber {

    numbers = new Map();

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    async carNumbers() {
        while (true) {
            const value = await this.question(
                'Введіть державний номер авто або дію (список/стоп/автомобілі/власники): '
            );

            switch (value.toUpperCase()) {
                case 'СПИСОК':
                    this.getFull();
                    break;
                case 'АВТОМОБІЛІ':
                    this.getCars();
                    break;
                case 'ВЛАСНИКИ':
                    this.getOwner();
                    break;
                case 'СТОП':
                    this.rl.close();
                    return;
                default: await this.addNumber(value.toUpperCase()); break;
            }
        }
    }

    private async question(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, resolve);
        });
    }

    private async getFull() {
        for (let data of this.numbers.entries()) {
            console.log(data);
        }
        await this.carNumbers();
    }

    private async getCars() {
        for (let number of this.numbers.keys()) {
            console.log(number);
        }
        await this.carNumbers();
    }

    private async getOwner() {
        for (let owner of this.numbers.values()) {
            console.log(owner);
        }
        await this.carNumbers();
    }

    private async addNumber(number: string) {
        const owner = await this.question("Введіть ім'я власника: ");
        this.numbers.set(number, owner);
        await this.carNumbers();
    }

}

const carNumber = new CarNumber();
carNumber.carNumbers();