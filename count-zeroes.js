function countZeroes(arr) {
    let lIdx = 0;
    let rIdx = arr.length - 1;
    
    while(lIdx <= rIdx) {
        let midIdx = Math.floor((lIdx + rIdx) / 2);
        let midVal = arr[midIdx];
        if(midVal != 0) {
            lIdx = midIdx + 1;
        }
        if(midVal === 0 && arr[midIdx - 1] === 0) {
            rIdx = midIdx - 1;
        }
        if(midVal === 0 && arr[midIdx -1] === 1) {
            return arr.length - midIdx;
        }

    } 
    return -1;
}

module.exports = countZeroes