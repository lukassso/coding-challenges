/*
Step 1: Problem Analysis
1. We are given a sorted array intervals[][], where each element [start, end] represents a numerical interval.
2. We are given a newInterval, which must be inserted into intervals while keeping the list sorted.
3. If newInterval overlaps with existing intervals, we must merge them.
4. We return a new list of intervals where overlapping intervals are merged.

Step 2: Choosing Algorithm – Linear Scan Approach
1. We iterate through intervals and divide them into three groups:
- Intervals that exist before newInterval → we add them without changes.
- Intervals that overlap with newInterval → we merge them by updating start and end.
- Intervals that come after newInterval → we add them after merging newInterval.
2. We add newInterval if it has not been added yet.
3. The time complexity is O(n) because we traverse intervals only once.

Step 2: Code Implementation
1. We define a function insert that takes parameters:
- intervals – a two-dimensional array of numbers.
- newInterval – a one-dimensional array of numbers.
2. The function returns a two-dimensional array of numbers representing the updated list of merged intervals.

Step 3: Implementation
*/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const merged: number[][] = [];
  let i = 0;

  // Step 1: Add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      merged.push(intervals[i]);
      i++;
  }

  // Step 2: Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
  }
  merged.push(newInterval);

  // Step 3: Add all remaining intervals
  while (i < intervals.length) {
      merged.push(intervals[i]);
      i++;
  }

  // Step 4: Return the merged list
  return merged;
}

