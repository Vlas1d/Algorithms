import * as crypto from 'crypto';

class HashMap<K, V> {
    private hash_map: { [key: string]: V };

    constructor() {
        this.hash_map = {};
    }

    set(key: K, value: V): void {
        this.hash_map[this.getHash(key)] = value;
    }

    get(key: K): V | null {
        return this.hash_map[this.getHash(key)] ?? null;
    }

    delete(key: K): void {
        delete this.hash_map[this.getHash(key)];
    }

    private getHash(key: any): string {
        const hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(key));
        return hash.digest('hex');
    }
}
const map = new Map();
const hash_map = new HashMap<any, any>();
/*
hash_map.set(212, 2444);
hash_map.set('sahufjads', true);
hash_map.set(false, '2444');
hash_map.set({ a: 123, b: 4564, c: 'qwerr' }, 'Hello');

console.log(hash_map.hash_map);
*/

const obj = { a: 500000, bg: 50010, str: '500000', arr: [500000, 500001, 500002], str1: `500000, 2500000, 25000000000}` };

for (let i = 0; i < 1000000; i++) {
    if (i === 500000) {
        hash_map.set(obj, i);
        map.set(obj, i);
    }
    else {
        hash_map.set({ a: i, bg: i + 10, str: i.toString(), arr: [i, i + 1, i + 2], str1: `${i},${i * 5}, ${i * i}` }, i);
        map.set({ a: i, bg: i + 10, str: i.toString(), arr: [i, i + 1, i + 2], str1: `${i},${i * 5}, ${i * i}` }, i);
    }
}

console.time('Map');
console.log(map.get(obj));
console.timeEnd('Map');

console.time('Hash Map');
console.log(hash_map.get(obj));
console.timeEnd('Hash Map');