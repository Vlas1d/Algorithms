import * as readline from 'readline';

class CarNumber {
    numbers: string[] = [];
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    async carNumbers() {
        while (true) {
            const value = await this.questionAsync(
                'Введіть державний номер авто або дію (список/стоп): '
            );

            switch (value.toUpperCase()) {
                case 'СПИСОК':
                    this.getNumbers();
                    break;
                case 'СТОП':
                    this.rl.close();
                    return;
                default:
                    await this.addNumber(value.toUpperCase());
                    break;
            }
        }
    }

    private async questionAsync(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, resolve);
        });
    }

    private async getNumbers() {
        this.numbers.forEach((number) => {
            console.log(number);
        });
        await this.carNumbers();
    }

    private async addNumber(number: string) {
        const index = await this.questionAsync('Введіть позицію в масиві: ');
        let i: number = parseInt(index);
        if (i < this.numbers.length) {
            this.numbers.splice(i, 0, number);
        } else {
            this.numbers.push(number);
        }
        await this.carNumbers();
    }
}

const carNumber = new CarNumber();
carNumber.carNumbers();
