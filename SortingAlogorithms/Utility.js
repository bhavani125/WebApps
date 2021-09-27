//Selection Sort
export const selectionSort = (array) => {
    for (let i=0; i<array.length-1; i++) {
        let min = i;     //here in min iam storing the index value

        for (let j=i+1; j<array.length; j++) {
            if (array[j] < array[min]) { //finding the min elemelent
                min = j;   
            }
        }
        //swaping the index element with min element
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;

    }
    return array;
}

//bubble sort
export const bubbleSort = (array) => {
    for (let i=0; i<array.length-1; i++) {
 
        for (let j=0; j<array.length-1-i; j++) {

            if (array[j] > array[j + 1]) {  //if j is greater than j+1 then swap
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
//merge sort
//leftArr and rightArr are sorted
 export const merge = (leftArr,rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];
        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
    }
    return output.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

export const mergeSort = array => {
    if(array.length<=1) {
        return array;
    }
    
    const middleIndex = Math.floor(array.length/2);
    const leftArr = array.slice(0,middleIndex);
    const rightArr = array.slice(middleIndex);
    
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};

//binary Search 
export const binarySearch = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // if we found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;
}

