import * as crypto from 'crypto';

class HashMap<K, V> {
    hash_map: { [key: string]: V };

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

    getHash(key: any): string {
        const hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(key));
        return hash.digest('hex');
    }
}

const hash_map = new HashMap<any, any>();

hash_map.set(212, 2444);
hash_map.set('sahufjads', true);
hash_map.set(false, '2444');

console.log(hash_map.hash_map);