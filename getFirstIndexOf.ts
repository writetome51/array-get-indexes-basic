import { isArray } from 'basic-data-handling/isArray_notArray';
import { getIndexOfPrimitive } from './getIndexOfPrimitive';
import { getFirstIndexOfArray } from './getFirstIndexOfArray';


// returns -1 if value being searched for isn't found.
// value cannot be object.

export function getFirstIndexOf(value, array): number {
	if (isArray(value)) {
		return getFirstIndexOfArray(value, array);
	}
	else { // if primitive...
		return getIndexOfPrimitive(value, array);
	}
}