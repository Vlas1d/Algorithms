class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }
    getVertex() {
        return Array.from(this.adjacencyList.keys());
    }
    getEdges() {
        return Array.from(this.adjacencyList.entries());
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdges('A', 'B');
graph.addEdges('A', 'C');
graph.addEdges('B', 'D');
graph.addEdges('C', 'D');
console.log(graph.getVertex());
console.log(graph.getEdges());
//# sourceMappingURL=graph.js.map