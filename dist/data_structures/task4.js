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
        this.numbers = new Map();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    carNumbers() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const value = yield this.question('Введіть державний номер авто або дію (список/стоп/автомобілі/власники): ');
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
                    default:
                        yield this.addNumber(value.toUpperCase());
                        break;
                }
            }
        });
    }
    question(question) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.rl.question(question, resolve);
            });
        });
    }
    getFull() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let data of this.numbers.entries()) {
                console.log(data);
            }
            yield this.carNumbers();
        });
    }
    getCars() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let number of this.numbers.keys()) {
                console.log(number);
            }
            yield this.carNumbers();
        });
    }
    getOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let owner of this.numbers.values()) {
                console.log(owner);
            }
            yield this.carNumbers();
        });
    }
    addNumber(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = yield this.question("Введіть ім'я власника: ");
            this.numbers.set(number, owner);
            yield this.carNumbers();
        });
    }
}
const carNumber = new CarNumber();
carNumber.carNumbers();
//# sourceMappingURL=task4.js.map