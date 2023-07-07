const map = new Map();

console.log(`>>> Start:`);
console.log(map);

let arr_key: number[] = [1, 2];

map.set(1, 3);
map.set('dff', 654);
map.set(arr_key, 'Hello');
map.set(true, 'Danger');
console.log(`>>> Init:`);
console.log(map);

console.log(`>>> Get 'Hello': ${map.get(true)}`);

console.log(`>>> Has: ${map.has('3')}`);

map.delete(1);
console.log(`>>> Delete 3:`);
console.log(map);

console.log(`>>> Size: ${map.size}`);

map.forEach((value, key) => {
    console.log(`>> Value: ${value}; Key: ${key}`);
});

console.log(`>>> Keys:`);
console.log(map.keys());

console.log(`>>> Values:`);
console.log(map.values());

console.log(`>>> Entries:`);
console.log(map.entries());