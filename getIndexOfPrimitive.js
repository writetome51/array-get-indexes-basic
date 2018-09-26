"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// According to tests, this error-checking does not slow down execution. It's not
// necessary to worry about repetitive error-checking slowing down execution
// when this function is called inside a loop.
function getIndexOfPrimitive(primitive, array, startingPosition) {
    if (startingPosition === void 0) { startingPosition = 0; }
    errorIfNotArray_1.errorIfNotArray(array);
    errorIfNotInteger_1.errorIfNotInteger(startingPosition);
    return array.indexOf(primitive, startingPosition);
}
exports.getIndexOfPrimitive = getIndexOfPrimitive;
