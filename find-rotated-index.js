function findRotatedIndex(arr, num) {
    let lowI = 0;
    let highI = arr.length - 1;

    while(lowI <= highI) {
        midI = Math.floor((lowI + highI) / 2);
        midVal = arr[midI];

        if(midVal === num) {
            return midI;
        }

        if(midVal > num) {
            
        }

    }
}

module.exports = findRotatedIndex