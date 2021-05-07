function sortedFrequency(arr, num) {
    let lowI = 0;
    let highI = arr.length - 1;
    let firstI 
    let lastI

    while(lowI <= highI) {
        midI = Math.floor((highI + lowI) / 2);
        midVal = arr[midI];
        if(midVal < num) {
            lowI = midI + 1;
        }
        if(midVal > num) {
            highI = midVal - 1;
        }
        if(midVal === num && arr[midI - 1] != num || midI === 0 && midVal === num) {
            firstI = midI;
        }
        if(midVal === num && arr[midI + 1] != num || midI === arr.length - 1 && midVal === num) {
            lastI = midI;
        }
    }
    return lastI - firstI;
}

module.exports = sortedFrequency