# Step 1: Problem Analysis
# We need to find all missing numbers in the inclusive range [lower, upper] that do not exist in the nums array. We must return the shortest possible list of ranges that cover only the missing numbers. No elements from nums should appear in any of the ranges.

# Additional notes:
# The nums array is sorted and contains unique values.
# The range [lower, upper] is inclusive (includes the boundaries).
# We return ranges in the [start, end] format, even when start == end (e.g., [2, 2] instead of just 2).
# The output list of ranges must be sorted in ascending order.

# Step 2: Approach
# We need to go through the numbers in the nums array and compare them with what should exist in the [lower, upper] range. Every time we find missing numbers between two values, we add a range that covers those missing values.

# Here’s the step-by-step approach:
# Add guards — we append upper + 1 to the end of nums, and we consider starting from lower - 1 before the array. This helps us easily detect missing numbers at the beginning and end.
# We iterate over the extended nums array in a loop — during each iteration, we have a pair (prev, curr) representing the previous and current number.
# If curr - prev > 1, it means there are missing numbers between them, so we add the range [prev + 1, curr - 1].
# After processing all pairs, we return the collected ranges.

# Step 3: Data Structures & Algorithm
# We need data structures that allow us to store the collected missing ranges.

# We’ll use:
# A list to gather ranges [start, end] that represent the missing fragments.
# A variable prev — we’ll update it at the end of each iteration to store the previous element.
# Iteration over an extended version of nums — we append upper + 1 to the end of the array, and set prev to lower - 1 before the loop.
# Simple conditional logic — if the difference between curr and prev is greater than 1, it means there is a missing range between them, so we add [prev + 1, curr - 1] to the result.

# Step 4: Implementation

from typing import List

def find_missing_ranges(nums: List[int], lower: int, upper: int) -> List[List[int]]:
    # We define a function that takes three arguments: `nums`, which is a list of integers,
    # and `lower` and `upper`, which are integers. The function returns a two-dimensional list of integers.
    
    # We define a variable `result` and initialize it as an empty list to store the missing ranges.
    result = []

    # We set the variable `prev` to `lower - 1` to easily detect missing numbers at the beginning of the range.
    prev = lower - 1

    # We add `upper + 1` to the end of the `nums` list to easily detect missing numbers at the end of the range.
    nums.append(upper + 1)

    # We start a `for` loop to iterate through `nums`, assigning each element to the variable `curr`.
    for curr in nums:
        # If the difference between `curr` and `prev` is greater than 1,
        # it means there are missing numbers between them.
        if curr - prev > 1:
            # We append a new range to the `result` list — it starts from `prev + 1` and ends at `curr - 1`.
            result.append([prev + 1, curr - 1])
        
        # We assign the value of `curr` to `prev` to prepare for the next iteration.
        prev = curr

    # We return `result`, which contains all missing ranges.
    return result
  
print(find_missing_ranges([0, 1, 3, 50, 75], 0, 99))
