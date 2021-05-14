function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
      } else {
        return binarySearch(array, num, pivot, array.length - 1);
      }
    }

binarySearch(arr, num, start, end) {
    if(arr.length === 0) {
        return -1;
    }
    if (num < array[start] || num > array[end]) {
        return -1;
    }
} 

findPivot(arr) {
    if(arr.length === 1) {
        return 0;
    }
        
    let start = 0;
    let end = arr.length -1;

    while(start <= end) {
        let mid = Math.floor((start + end) /2);

        if(arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

}

module.exports = findRotatedIndex