/*
Step 1: Problem Analysis
1. We are given an array `nums[]` that represents a permutation of numbers.
2. We must modify the array in-place to produce the next permutation in lexicographical order.
3. If the next permutation does not exist (i.e. the current one is the largest possible), we transform it into the smallest one by sorting in ascending order.
4. We are not allowed to use extra memory — only in-place modifications are allowed.

Step 2: Algorithm – Step-by-Step Analysis (Mathematical Logic)
1. We find the "breaking point" – the first index `i` (starting from the end).
2. If no such `i` is found, then the array is the highest permutation – we sort the entire array in ascending order.
3. If we find such an `i`, we look for the smallest number greater than `nums[i]` on its right side – call its index `j`.
4. We swap `nums[i]` with `nums[j]`.
5. Finally, we reverse the subarray from index `i + 1` to the end.

Step 3: Implementation
*/
// We define a function that takes nums, which is an array of numbers.
// The function returns void, as the array is modified in-place and nothing is returned.
function nextPermutation(nums: number[]): void {
  // We initialize a variable i as the second-to-last index of the array.
  let i = nums.length - 2;
  // we use a while loop to find the first decreasing element from the end
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // If we don’t find such a position, it means the array is already in the highest possible order
    i--;
  }

  if (i >= 0) {
    // If we found `i`, we search from the end for an index `j` such that `nums[j] > nums[i]`.
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    // We swap `nums[i]` and `nums[j]`
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // After swapping, we reverse the part of the array from `i + 1` to the end.
  // We use two pointers to swap elements from both sides inward
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

nextPermutation([1, 5, 3, 4, 2]);
