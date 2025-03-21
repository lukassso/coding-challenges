/*
Step 1: Problem Analysis
1. We are given an array 'height[]', where each element represents the height of a vertical line on the X-axis.
2. We can form a rectangular container between two lines – its height is the minimum of the two, and its width is the distance between them.
3. We need to find the pair of lines that forms the container with the largest area (maximum amount of water it can contain).
4. We return the maximum possible value of this area.

Step 2: Algorithm Chosen – Two Pointers Approach
1. We set two pointers: left at the beginning and right at the end of the array.
2. We calculate the area between 'height[left]' and 'height[right]'.
3. We update the maximum area found so far to 'maxArea'.
4. To potentially find a bigger area, we move the pointer that points to the shorter line.
5. We repeat this process as long as 'left < right'.
6. The time complexity is O(n), since each element is visited at most once.

Step 3: Implementation
*/

// We declare a function that takes height, which is an array of numbers.
// The function returns a number representing the maximum area between two lines.
function maxArea(height: number[]): number {
  // We define variables to set the start and end pointers.
  let left = 0;
  let right = height.length - 1;
  // We create a variable maxArea and initialize it to zero, which represents the largest area found so far.
  let maxArea = 0;

  // We define a while loop that runs as long as 'left < right'.
  while (left < right) {
    // We assign values to both left and right heights
    const heightLeft = height[left];
    const heightRight = height[right];
    // We define 'currentArea' as the product of the smaller height and the distance between the two pointers '(right - left)'.
    const currentArea = Math.min(heightLeft, heightRight) * (right - left);
    // We update maxArea by choosing the greater value between the current area and the maxArea found so far.
    maxArea = Math.max(maxArea, currentArea);

    // Then we use an if statement to check if 'heightLeft' is smaller than 'heightRight'
    if (heightLeft < heightRight) {
      // If true, we increment 'left' by one.
      left++;
    } else {
      // Otherwise, we decrement right by one.
      right--;
    }
  }
  //  After the loop, we return maxArea.
  return maxArea;
}
