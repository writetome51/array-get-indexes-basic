These are array-handling functions that return indexes of items in the array.


value: anything except an object .  Returns -1 if value not found.

getFirstIndexOf(value, array); // returns integer


Type-checking version of Array.indexOf().  Change the startingPosition to get something other
than the first index of primitive.  startingPosition can also be negative to search from the end.

getIndexOfPrimitive(primitive, array, startingPosition = 0) // returns -1 if not found


If primitive isn't found, this returns empty array

getIndexesOfPrimitive(primitive, array) // returns array of integers


If arrayToSearchFor is found in arrayToSearchInside, this returns the index of the first found instance.

getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside); // returns -1 if not found


if arrayToSearchFor isn't found, this returns empty array

getIndexesOfArray(arrayToSearchFor, arrayToSearchInside); // returns array of integers