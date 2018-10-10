"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
// returns empty [] if arrayToSearchFor isn't found.
// if arrayToSearchFor contains objects, this will always return empty array.
function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([arrayToSearchFor, arrayToSearchInside]);
    var indexes = [];
    arrayToSearchInside.filter(function (value, index) {
        if (isArray_notArray_1.isArray(value) && arraysMatch_1.arraysMatch(value, arrayToSearchFor)) {
            indexes.push(index);
            return true;
        }
        else
            return false;
    });
    return indexes;
}
exports.getIndexesOfArray = getIndexesOfArray;
