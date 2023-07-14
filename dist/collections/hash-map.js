import * as crypto from 'crypto';
class HashMap {
    constructor() {
        this.hash_map = {};
    }
    set(key, value) {
        this.hash_map[this.getHash(key)] = value;
    }
    get(key) {
        var _a;
        return (_a = this.hash_map[this.getHash(key)]) !== null && _a !== void 0 ? _a : null;
    }
    delete(key) {
        delete this.hash_map[this.getHash(key)];
    }
    getHash(key) {
        const hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(key));
        return hash.digest('hex');
    }
}
const hash_map = new HashMap();
hash_map.set(212, 2444);
hash_map.set('sahufjads', true);
hash_map.set(false, '2444');
console.log(hash_map.hash_map);
//# sourceMappingURL=hash-map.js.map