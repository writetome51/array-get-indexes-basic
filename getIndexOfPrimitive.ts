import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfNotPrimitive } from 'basic-data-handling/errorIfNotPrimitive';

// According to tests, this error-checking does not slow down execution. It's not
// necessary to worry about repetitive error-checking slowing down execution
// when this function is called inside a loop.


export function getIndexOfPrimitive(primitive, array, startingPosition = 0): number {
	errorIfNotPrimitive(primitive);
	errorIfNotArray(array);
	errorIfNotInteger(startingPosition);
	return array.indexOf(primitive, startingPosition);
}
