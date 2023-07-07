class User {
    constructor(personal_num, first_name, last_name, age) {
        this.personal_num = personal_num;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    compare(otherUser) {
        return this.personal_num - otherUser.personal_num;
    }
}
const collection = [
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
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
const collection1 = [
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
function compared(a, b) {
    return a.personal_num - b.personal_num;
}
collection1.sort(compared);
console.log('>>> SORT COLLECTION');
console.log(collection1);
//# sourceMappingURL=task6.js.map