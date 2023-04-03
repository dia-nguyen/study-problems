/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.8284, and since we need to return the floor of the square root (integer), hence we returned 2.
 */

var mySqrt = function(x) {
  if (x < 2) return x;
  let left = 2;
  let right = x/2;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right)/2)

    if((middle * middle) > x) {
      right = middle - 1;
    } else if ((middle * middle) < x){
      left = middle + 1;
    }
    else {
      return middle
    }
  }
  return right;
};
