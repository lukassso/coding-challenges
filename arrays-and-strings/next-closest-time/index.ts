/*
Step 1: Problem Analysis
We are given a string time in the "HH:MM" format, where:
HH (hours) is in the range [00, 23].
MM (minutes) is in the range [00, 59].
We need to find the closest future time that can be formed using only the four digits present in time.
We must return the new time in the same "HH:MM" format.
The new time must be strictly greater than time, but if no valid option exists, we should return the smallest possible time using the given digits.

Step 2: Chosen Algorithm – Brute Force with Generating Permutations
We extract digits from time and store them in a Set to have a unique collection of digits for use.
We generate all possible valid combinations of hours and minutes using only these digits.
We sort the possible times and choose the closest future time greater than time.
If we do not find a greater time, we return the smallest possible time using the available digits.

Step 3: Code implementation:
*/
