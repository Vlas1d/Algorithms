class GraphCities {
    constructor() {
        this.adjacencyList = new Map();
    }
    addCity(city) {
        this.adjacencyList.set(city, []);
    }
    addWay(city1, city2, way) {
        if (!this.adjacencyList.has(city1)) {
            this.addCity(city1);
        }
        if (!this.adjacencyList.has(city2)) {
            this.addCity(city2);
        }
        this.adjacencyList.get(city1).push({ city: city2, way });
        this.adjacencyList.get(city2).push({ city: city1, way });
    }
    getCities() {
        return Array.from(this.adjacencyList.keys());
    }
    getWays() {
        return this.adjacencyList.entries();
    }
    getNeighbors(city) {
        return this.adjacencyList.get(city);
    }
    shortestWay(startCity, targetCity) {
        const distances = {};
        const previousCities = {};
        const visited = {};
        for (const city of this.getCities()) {
            distances[city] = (city === startCity) ? 0 : Infinity;
        }
        let currentCity = startCity;
        while (currentCity !== targetCity) {
            visited[currentCity] = true;
            const neighbors = this.getNeighbors(currentCity);
            for (const neighbor of neighbors) {
                if (!visited[neighbor.city]) {
                    const distance = distances[currentCity] + neighbor.way;
                    if (distance < distances[neighbor.city]) {
                        distances[neighbor.city] = distance;
                        previousCities[neighbor.city] = currentCity;
                    }
                }
            }
            let nextCity = null;
            let shortestDistance = Infinity;
            for (const city of this.getCities()) {
                if (!visited[city] && distances[city] < shortestDistance) {
                    shortestDistance = distances[city];
                    nextCity = city;
                }
            }
            if (nextCity === null) {
                break;
            }
            else {
                currentCity = nextCity;
            }
        }
        const totalWay = [targetCity];
        let currentPrew = previousCities[targetCity];
        while (currentPrew !== startCity) {
            totalWay.push(currentPrew);
            currentPrew = previousCities[currentPrew];
        }
        totalWay.push(startCity);
        totalWay.reverse();
        return [totalWay.join(' -> '), distances[targetCity]];
    }
}
const graph_cities = new GraphCities();
const cities_ways = [
    ['Одеса', 'Вінниця', 423],
    ['Одеса', 'Кропивницький', 328],
    ['Одеса', 'Миколаїв', 133],
    ['Вінниця', 'Кропивницький', 337],
    ['Вінниця', 'Житомир', 128],
    ['Вінниця', 'Київ', 267],
    ['Вінниця', 'Хмельницький', 119],
    ['Вінниця', 'Чернівці', 269],
    ['Миколаїв', 'Кропивницький', 181],
    ['Миколаїв', 'Херсон', 71],
    ['Миколаїв', 'Дніпро', 321],
    ['Херсон', 'Дніпро', 329],
    ['Херсон', 'Запоріжжя', 353],
    ['Херсон', 'Севастополь', 276],
    ['Кропивницький', 'Черкаси', 129],
    ['Кропивницький', 'Полтава', 246],
    ['Кропивницький', 'Дніпро', 244],
    ['Запоріжжя', 'Дніпро', 85],
    ['Запоріжжя', 'Донецьк', 229],
    ['Харків', 'Полтава', 143],
    ['Харків', 'Дніпро', 218],
    ['Харків', 'Донецьк', 315],
    ['Харків', 'Луганськ', 329],
    ['Луганськ', 'Донецьк', 174],
    ['Дніпро', 'Донецьк', 263],
    ['Дніпро', 'Полтава', 197],
    ['Полтава', 'Суми', 175],
    ['Полтава', 'Чернігів', 404],
    ['Полтава', 'Київ', 341],
    ['Полтава', 'Черкаси', 239],
    ['Суми', 'Харків', 184],
    ['Суми', 'Чернігів', 307],
    ['Київ', 'Чернігів', 148],
    ['Київ', 'Черкаси', 192],
    ['Київ', 'Житомир', 140],
    ['Рівне', 'Житомир', 189],
    ['Рівне', 'Хмельницький', 194],
    ['Рівне', 'Тернопіль', 159],
    ['Рівне', 'Львів', 211],
    ['Рівне', 'Луцьк', 73],
    ['Луцьк', 'Львів', 151],
    ['Тернопіль', 'Львів', 132],
    ['Тернопіль', 'Хмельницький', 112],
    ['Тернопіль', 'Чернівці', 172],
    ['Тернопіль', 'Івано-Франківськ', 134],
    ['Львів', 'Ужгород', 267],
    ['Львів', 'Івано-Франківськ', 132],
    ['Івано-Франківськ', 'Ужгород', 293],
    ['Івано-Франківськ', 'Чернівці', 135]
];
for (let i = 0; i < cities_ways.length; i++) {
    let [city1, city2, way] = cities_ways[i];
    graph_cities.addWay(city1, city2, way);
}
const shortestTuple = graph_cities.shortestWay('Одеса', 'Львів');
console.log(`>>> Way: ${shortestTuple[0]}; Distance: ${shortestTuple[1]} km`);
//# sourceMappingURL=task7.js.map