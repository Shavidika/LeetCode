"use strict";

function insertionSort(array){
    for(let i=0;i<array.length;i++){
        let j=i;
        let value = array[i]
        while(j>0 && array[j-1]>value){
            array[j]=array[j-1];
            j--;
        }
        array[j]=value;
    }
    return array;
}

let arr= [3,0,4,26,7,4];
console.log(insertionSort(arr));

// Big O notation for insertion sort is O(n^2)
// Worst case O(n^2)
// Best Case O(n)