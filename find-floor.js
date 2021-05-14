function findFloor(arr, x) {
  let leftI = 0;
  let rightI = arr.length - 1;

  if(x >= arr[rightI]) {
    return arr[rightI];
  }

  if(arr[leftI] > x) {
    return -1;
  }

  while(leftI <= rightI) {
      midI = Math.floor((leftI + rightI) / 2);
      midVal = arr[midI];

      if(midVal === x) {
        return midVal;
    }

    if (midI > 0 && arr[midI - 1] <= x && x < midVal) {
      return arr[midI - 1];
    }

      if(midVal > x) {
          rightI = midI - 1;
      }

      if(midVal < x ) {
        leftI = midI + 1;
      }
  }
}

module.exports = findFloor