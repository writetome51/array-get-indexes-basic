import { getIndexesOfArray } from '../getIndexesOfArray';


let arr1 = [1, 2, 3, 4, [1], 5, 6, 7, [1], 8, 9];
let arr2 = [];
let i = -1;
while (++i < 90000) {
	arr2.push(...arr1);
}


let arrToSearchFor = [1];

let indexes = getIndexesOfArray(arrToSearchFor, arr2);

console.log(indexes.length);