"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexOfPrimitive_1 = require("../getIndexOfPrimitive");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
var errorTriggered = false;
// Test 1: error is triggered if array parameter is not array:
try {
    var result_1 = getIndexOfPrimitive_1.getIndexOfPrimitive(5, undefined);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 1: passed.');
else
    console.log('test 1: failed.');
errorTriggered = false;
// Test 2: error is triggered if startingPosition parameter is not integer:
try {
    // @ts-ignore
    var result_2 = getIndexOfPrimitive_1.getIndexOfPrimitive(5, arr, '1');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 2: passed.');
else
    console.log('test 2: failed.');
errorTriggered = false;
// Test 3: If primitive is not found, it returns -1:
var result = getIndexOfPrimitive_1.getIndexOfPrimitive(100, arr);
if (result === -1)
    console.log('test 3: passed.');
else
    console.log('test 3: failed.');
// Test 4: If startingPosition is negative, it searches from end of array:
result = getIndexOfPrimitive_1.getIndexOfPrimitive(10, arr, -1);
if (result === 11)
    console.log('test 4: passed.');
else
    console.log('test 4: failed.');
