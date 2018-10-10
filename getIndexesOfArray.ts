import { isArray } from 'basic-data-handling/isArray_notArray';
import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';


// returns empty [] if arrayToSearchFor isn't found.
// if arrayToSearchFor contains objects, this will always return empty array.

export function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside): number[] {
	errorIfValuesAreNotArrays([arrayToSearchFor, arrayToSearchInside]);
	let indexes = [];
	arrayToSearchInside.filter((value, index) => {
		if (isArray(value) && arraysMatch(value, arrayToSearchFor)) {
			indexes.push(index);
			return true;
		}
		else return false;
	});
	return indexes;
}
