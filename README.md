# node-dijkstra

Dijkstra's algorithm, conceived by computer scientist Edsger Dijkstra, is a graph search algorithm that solves in single-source
shortest path problem for a graph with non-negative edge path costs, producing a shortest path tree. 

![Screenshot](http://farm6.staticflickr.com/5572/15142640541_6ea1eb3d48.jpg)

## Installation

```

$ npm install node-dijkstra

```


```
$ mkdir myApp
$ cd myApp
$ npm install dijkstra-edsger
$ touch app.js 
```

## Sample Code

```

var Dijkstra = require('dijkstra-edsger');

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

```

## References

  http://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

## License

MIT