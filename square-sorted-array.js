/**
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 */
function make_squares(arr) {
  const n = arr.length;
  // squares = [];
  let squares = Array(n).fill(0);
  let left = 0;
  let right = arr.length -1;
  let currIndex = arr.length -1;

  while (left <= right) {
    let leftVal = arr[left] * arr[left]
    let rightVal = arr[right] * arr[right]

    if (leftVal > rightVal) {
      // squares.unshift(leftVal)
      squares[currIndex] = leftVal
      left += 1;
    } else {
      // squares.unshift(rightVal)
      squares[currIndex] = rightVal
      right -= 1;
    }
    currIndex -= 1;
  }

  return squares;
}


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
