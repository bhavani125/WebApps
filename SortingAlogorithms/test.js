import { selectionSort,bubbleSort, mergeSort ,merge,binarySearch } from './Utility.js'

//selection sort
let array = [9,3,1,4,2]
console.log(selectionSort(array));

//bubblesort
let array1 = [50,40,30,20,10];
console.log(bubbleSort(array1));

//mergesort
let array2 = [6, 12, 62, 56, 85];
console.log(mergeSort(merge(array1, array2)));

//binarysearch
let sortedArray = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(sortedArray, 4));
