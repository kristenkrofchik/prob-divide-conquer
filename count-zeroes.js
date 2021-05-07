function countZeroes(arr) {
    let leftI = 0;
    let rightI = arr.length - 1;
    
    while(leftI <= rightI) {
        let midI = Math.floor((leftI + rightI) / 2);
        let midValue = arr[midI];
        if(midValue != 0) {
            leftI = midI + 1;
        }
        if(midValue === 0 && arr[midI - 1] === 0) {
            rightI = midI - 1;
        }
        if(midValue === 0 && arr[midI -1] === 1 || midI === 0 && midValue === 0) {
            return arr.length - midI;
        }

    } 
    return 0;
}

module.exports = countZeroes