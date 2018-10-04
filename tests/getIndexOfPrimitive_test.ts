import { getIndexOfPrimitive } from '../getIndexOfPrimitive';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
let errorTriggered = false;


// Test 1: error is triggered if array parameter is not array:
try {
	let result = getIndexOfPrimitive(5, undefined);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1: passed.');
else console.log('test 1: failed.');
errorTriggered = false;


// Test 2: error is triggered if startingPosition parameter is not integer:
try {
	// @ts-ignore
	let result = getIndexOfPrimitive(5, arr, '1');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2: passed.');
else console.log('test 2: failed.');
errorTriggered = false;


// Test 3: If primitive is not found, it returns -1:
let result = getIndexOfPrimitive(100, arr);

if (result === -1) console.log('test 3: passed.');
else console.log('test 3: failed.');



// Test 4: If startingPosition is negative, it searches from end of array:
result = getIndexOfPrimitive(10, arr, -1);

if (result === 11) console.log('test 4: passed.');
else console.log('test 4: failed.');


