def merge(intervals: list[list[int]]) -> list[list[int]]:
    # Step 1: Sort intervals based on start value
    intervals.sort(key=lambda x: x[0])

    # Step 2: Initialize merged list
    merged = []

    # Step 3: Iterate and merge overlapping intervals
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])

    # Step 4: Return merged intervals
    return merged
