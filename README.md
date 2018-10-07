These are array-handling functions that return indexes of items in the array.


value: anything except an object

getFirstIndexOf(value, array); // returns integer


Strict type-checking version of Array.indexOf().  Change the startingPosition to get something other
than the first index.  startingPosition can also be negative to search from the end.

getIndexOfPrimitive(primitive, array, startingPosition = 0) // returns integer


If primitive isn't found, this returns empty array

getIndexesOfPrimitive(primitive, array) // returns array of integers


If arrayToSearchFor is found in arrayToSearchInside, this returns the index of the first found instance.

getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside); // returns integer


if arrayToSearchFor isn't found, this returns empty array

getIndexesOfArray(arrayToSearchFor, arrayToSearchInside); // returns array of integers