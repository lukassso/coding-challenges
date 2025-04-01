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