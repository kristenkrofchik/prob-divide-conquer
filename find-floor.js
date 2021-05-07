function findFloor(arr, x) {
  let leftI = 0;
  let rightI = arr.length - 1;

  while(leftI <= rightI) {
      midI = Math.floor((leftI + rightI) / 2);
      midVal = arr[midI];

      if(midVal > x) {
          rightI = midI - 1;
      }

      if(midVal < x ) {
        leftI = midI + 1;
      }

      if(midVal === x || midVal !== x && arr.length === 1) {
          return midVal;
      }
  }
}

module.exports = findFloor