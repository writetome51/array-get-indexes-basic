"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexesOfArray_1 = require("../getIndexesOfArray");
var arr1 = [1, 2, 3, 4, [1], 5, 6, 7, [1], 8, 9];
var arr2 = [];
var i = -1;
while (++i < 90000) {
    arr2.push.apply(arr2, arr1);
}
var arrToSearchFor = [1];
var indexes = getIndexesOfArray_1.getIndexesOfArray(arrToSearchFor, arr2);
console.log(indexes.length);
