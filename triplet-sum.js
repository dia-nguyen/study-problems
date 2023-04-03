/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 */
function searchTriplets(arr) {
  const triplets = [];
  let sortedArr = arr.sort((a, b) => a - b);
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if(i > 0 && sortedArr[i] === sortedArr[i-1]) continue;

    searchPairs(sortedArr, -sortedArr[i], i + 1, triplets)
  }
  return triplets;
}

function searchPairs(arr, target, left, triplets){
  let right = arr.length -1;

  while (left < right) {
    let sumTarget = arr[left] + arr[right];
    if(sumTarget === target) {
      triplets.push([-target, arr[left], arr[right], ])
      left += 1;
      right -= 1;
    } else if (sumTarget > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}
