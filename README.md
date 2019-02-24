# getFirstIndexOf(value, array): number

Returns index of first instance of `value` found in `array`.  
`value` can be a primitive or array .  Returns -1 if `value` not found.

# getIndexOfPrimitive(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primitive,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingPosition? = 0<br>): number

Behaves like `Array.indexOf()`, except it does strict type-checking on `primitive`.  
Change `startingPosition` to get something other than the first index.  
startingPosition can also be negative to search from the end.  
Returns -1 if `primitive` not found.


# getFirstIndexOfArray(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayToSearchFor,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayToSearchInside<br>): number

If `arrayToSearchFor` is found in `arrayToSearchInside`, this returns  
the index of the first found instance.  Returns -1 if not found.


# getIndexesOfPrimitive(primitive, array): number[]

If `primitive` isn't found, returns empty array.


# getIndexesOfArray(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayToSearchFor,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayToSearchInside<br>): number[]

if `arrayToSearchFor` isn't found, returns empty array.