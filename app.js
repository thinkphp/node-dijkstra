require('dijkstra');

var road = [[1, 2, 1],
            [1, 3, 9],
            [1, 5, 3],
            [2, 4, 3],
            [2, 3, 7],
            [4, 3, 2],
            [4, 1, 1],
            [5, 2, 4],
            [5, 4, 2]]

var start = 1, 
    end   = 3;

var dij = new Dijkstra(start, end, road );

console.log("Cost = " + dij.getCost() )

console.log("Shortest path from the node "+ start + " to "+ end + " -> "+ dij.getShortestPath() )