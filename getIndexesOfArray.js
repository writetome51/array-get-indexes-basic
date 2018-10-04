"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
// returns empty [] if arrayToSearchFor isn't found.
// if arrayToSearchFor contains objects, this will always return empty array.
function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([arrayToSearchFor, arrayToSearchInside]);
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
