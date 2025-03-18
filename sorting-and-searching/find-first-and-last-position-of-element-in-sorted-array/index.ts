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