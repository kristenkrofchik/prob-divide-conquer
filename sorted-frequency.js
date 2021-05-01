function sortedFrequency(arr, num) {
    let lowI = 0;
    let highI = arr.length - 1;

    if(highI >= lowI) {
        let midI = Math.floor((lowI + highI) / 2);
        if(arr[midI] > num) {
            highI = midI - 1; 
        }
        if(arr[midI] < num) {
            lowI = midI + 1;
        }
        if(arr[midI] === num && (arr[mi]))
    }
}

module.exports = sortedFrequency