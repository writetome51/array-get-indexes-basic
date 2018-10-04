import { isArray } from 'basic-data-handling/isArray_notArray';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';


// returns -1 if array being searched for isn't found.
// if arrayToSearchFor contains objects, this will always return -1.

export function getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside): number {
	errorIfNotArray(arrayToSearchInside);
	return arrayToSearchInside.findIndex((value) => {
		return (isArray(value) && arraysMatch(value, arrayToSearchFor));
	});
}