class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdges(vertex1: string, vertex2: string): void {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    getVertex(): string[] {
        return Array.from(this.adjacencyList.keys());
    }
    getEdges(): object[] {
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