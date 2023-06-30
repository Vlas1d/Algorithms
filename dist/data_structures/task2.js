var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as readline from 'readline';
class CarNumber {
    constructor() {
        this.numbers = [];
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    carNumbers() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const value = yield this.questionAsync('Введіть державний номер авто або дію (список/стоп): ');
                switch (value.toUpperCase()) {
                    case 'СПИСОК':
                        this.getNumbers();
                        break;
                    case 'СТОП':
                        this.rl.close();
                        return;
                    default:
                        yield this.addNumber(value.toUpperCase());
                        break;
                }
            }
        });
    }
    questionAsync(question) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.rl.question(question, resolve);
            });
        });
    }
    getNumbers() {
        return __awaiter(this, void 0, void 0, function* () {
            this.numbers.forEach((number) => {
                console.log(number);
            });
            yield this.carNumbers();
        });
    }
    addNumber(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield this.questionAsync('Введіть позицію в масиві: ');
            let i = parseInt(index);
            if (i < this.numbers.length) {
                this.numbers.splice(i, 0, number);
            }
            else {
                this.numbers.push(number);
            }
            yield this.carNumbers();
        });
    }
}
const carNumber = new CarNumber();
carNumber.carNumbers();
//# sourceMappingURL=task2.js.map