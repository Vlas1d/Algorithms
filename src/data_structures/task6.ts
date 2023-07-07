//-----------------------COMPARABLE---------------------------------------------------------------

interface Comparable {
    compare(otherUser: User): number;
}

class User implements Comparable {
    personal_num: number;
    first_name: string;
    last_name: string;
    age: number;

    constructor(personal_num: number, first_name: string, last_name: string, age: number) {
        this.personal_num = personal_num;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    compare(otherUser: User): number {
        return this.personal_num - otherUser.personal_num;
    }
}

const collection: User[] = [
    new User(11, 'Vlad', 'Sidyk', 21),
    new User(7, 'Vova', 'Tatarin', 20),
    new User(23, 'Vova', 'Lytvak', 20),
    new User(2, 'Vitaliy', 'Tatarin', 20),
    new User(65, 'Andrew', 'Tkach', 22),
    new User(77, 'Ivan', 'Pirko', 45),
    new User(52, 'Denys', 'Prokopchuk', 19),
    new User(37, 'Ivan', 'Kuziv', 18),
    new User(18, 'Dima', 'Chigur', 21),
    new User(43, 'Sasha', 'Teren', 21),
];

console.log(collection);

collection.sort((a, b) => a.compare(b));
console.log('>>> SORT COLLECTION');


console.log(collection);

//----------------------------------COMPARATOR-------------------------------------------------

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

const collection1: User[] = [
    new User(11, 'Vlad', 'Sidyk', 21),
    new User(7, 'Vova', 'Tatarin', 20),
    new User(23, 'Vova', 'Lytvak', 20),
    new User(2, 'Vitaliy', 'Tatarin', 20),
    new User(65, 'Andrew', 'Tkach', 22),
    new User(77, 'Ivan', 'Pirko', 45),
    new User(52, 'Denys', 'Prokopchuk', 19),
    new User(37, 'Ivan', 'Kuziv', 18),
    new User(18, 'Dima', 'Chigur', 21),
    new User(43, 'Sasha', 'Teren', 21),
];

console.log(collection1);

function compared(a: User, b: User): number {
    return a.personal_num - b.personal_num;
}

collection1.sort(compared);
console.log('>>> SORT COLLECTION');

console.log(collection1);