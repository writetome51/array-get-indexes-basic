"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var getIndexOfPrimitive_1 = require("./getIndexOfPrimitive");
var getFirstIndexOfArray_1 = require("./getFirstIndexOfArray");
// returns -1 if value being searched for isn't found.
// value cannot be object.
function getFirstIndexOf(value, array) {
    if (typeof value === 'object' && notArray(value)) {
        throw new Error('This function cannot search for objects');
    }
    if (isArray_notArray_1.isArray(value)) {
        return getFirstIndexOfArray_1.getFirstIndexOfArray(value, array);
    }
    else { // if primitive...
        return getIndexOfPrimitive_1.getIndexOfPrimitive(value, array);
    }
}
exports.getFirstIndexOf = getFirstIndexOf;
