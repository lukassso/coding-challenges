/*
Step 1: Problem analysis
1. We are given a sorted array of integers nums and a number target that we need to find
2. We need to return an array [first, last], where:
- first is the index of the first occurrence of target
- last is the index of the last occurrence of target
3. If target does not exist in nums, we return [-1, -1]
4. We must find a solution with O(log n) time complexity

Step 2: Algorithm chosen – Binary Search
1. We can use binary search because the array nums is sorted
2. We split the problem into two independent searches:
- The first search finds the first occurrence of target
- The second search finds the last occurrence of target
3. The time complexity is O(log n), which results in a total complexity of O(2 log n) = O(log n)

Algorithm approach:
1. We use left and right variables to restrict the search range
2. If we find target, we check whether it is the first or last occurrence
3. If mid is our target, but it is not the first/last occurrence, we continue searching in the appropriate direction

Step 3: Code implementation:
*/
// we define function that takes `nums` as an array of numbers (a sorted array) and `target` as a number (the value we are searching for).
// The function returns an array of numbers representing the indexes of the first and last occurrences of target
function searchRange(nums: number[], target: number): number[] {
  // We define a function that takes `findFirst` as a boolean parameter and returns a number
  function binarySearch(findFirst: boolean): number {
    // we define 3 `let` variables
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    // We define a while loop that runs as long as `left` is smaller or equal to `right`
    while (left <= right) {
      // we define a constant `mid`, which is set as the middle index between `left` and `right`
      const mid = Math.floor((left + right) / 2);
      // We use an if statement to check if `nums[mid]` is equal to `target`
      if (nums[mid] === target) {
        // If the condition is met, we assign `mid` to `result`
        result = mid;
        // We use another if statement to check if `findFirst` is true
        if (findFirst) {
          // If true, we update `right` to continue searching for the first occurrence
          right = mid - 1; // Continue searching left
        } else {
          // Otherwise, we update `left` to continue searching for the last occurrence
          left = mid + 1; // Continue searching right
        }
        // If `nums[mid]` is greater than `target`, we update right
      } else if (nums[mid] < target) {
        left = mid + 1;

        // Otherwise, we update left
      } else {
        right = mid - 1;
      }
    }
    // After exiting the loop, we return `result`, which represents either the first or last occurrence of `target`
    return result;
  }
  // We return the result in the [first, last] format
  return [binarySearch(true), binarySearch(false)];
}
