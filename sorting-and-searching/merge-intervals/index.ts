/*
Step 1: Problem Analysis
1. We are given a list of intervals[][], where each element [start, end] represents a numeric interval.
2. We need to merge all overlapping intervals and return a list of merged intervals.
3. The intervals are not sorted, but their values are integers.
4. We need to find a solution with the best possible time complexity.

Step 2: Algorithm Chosen – Sorting + Greedy Approach
1. We sort the intervals based on their start values to make detecting overlapping intervals easier.
2. We create a variable merged[] to store the merged intervals.
3. We iterate through the sorted intervals and check:
4. If the current interval overlaps with the previous one (previous.end >= current.start), we merge them.
5. If the interval is not overlapping, we add it as a new independent interval.
6. The time complexity is O(n log n) (sorting) + O(n) (iteration) = O(n log n).

Step 3: Implementation
*/