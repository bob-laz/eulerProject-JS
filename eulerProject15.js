var now = require('performance-now');

gridSize = 20;

// Using combinatorics, the problem becomes: "How many ways can we choose N out of 2N possible paths if the order does not matter?" because there will always be an equal number of down and right movies, so we choose where to put the downs and rights, for a total of 2N moves. 

// n Choose k implementation
function nChooseK(gridSize) {
    var paths = 1;

    for (var i = 0; i < gridSize; i++) {
        paths *= (2 * gridSize) - i;
        paths /= i + 1;
    }
    return paths;
};

var start = now();

console.log(nChooseK(gridSize));

var end = now();

console.log("Run time: " + (end - start));