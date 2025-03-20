# The best data structure here is a Set (HashSet) because:
# Fast lookups (O(1)) – Checking if a character exists in the set takes constant time.
# Fast insertions (O(1)) – Adding new characters to the set is efficient.
# Fast deletions (O(1)) – Removing characters when adjusting the sliding window is quick.

def length_of_longest_substring(s: str) -> int:
    char_set = set()
    left = 0
    max_length = 0

    # Iterate through the string with the right pointer
    for right in range(len(s)):
        # If a duplicate character is found, remove characters from the left
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        # Add the current character to the set
        char_set.add(s[right])

        # Update max_length with the longest found substring
        max_length = max(max_length, right - left + 1)

    # Return the longest substring length
    return max_length
