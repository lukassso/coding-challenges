def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
    merged = []
    i = 0

    # Step 1: Add all intervals before newInterval
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        merged.append(intervals[i])
        i += 1

    # Step 2: Merge overlapping intervals
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    merged.append(newInterval)

    # Step 3: Add all remaining intervals
    while i < len(intervals):
        merged.append(intervals[i])
        i += 1

    # Step 4: Return the merged list
    return merged
