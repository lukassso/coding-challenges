/*
Step 1: Problem Analysis
Main goal:
- We need to find the longest possible substring that contains at most two different characters.
- For example, given the string "eceba", the longest valid substring is "ece", which has a length of 3.

Step 2: Approach
- We'll use the sliding window technique — two pointers (left and right) that define the current substring (the window).
- We'll expand the window to the right by moving the right pointer and adding new characters.
- When the window contains more than two distinct characters, we'll move the left pointer forward until we're back to at most two distinct characters.
-While sliding, we'll keep track of the length of the longest valid substring.

Step 3: Data Structures & Algorithm – poprawiona wersja
Main goal:
We need to store information about the number and type of characters in the current window.
We’ll use:
- A Hash Map – to track the number of occurrences of each character in the current window
(key: character, value: number of occurrences)
- Two pointers (left and right) – to mark the boundaries of the window
- A variable maxLength – to keep track of the length of the longest valid substring
During iteration:
- When the number of distinct characters exceeds 2, we move the left pointer forward until there are at most two distinct characters in the map again
- After each move of the right pointer, we update maxLength if the current window length is greater than the previous maximum

Step 3: Implementation
*/

function lengthOfLongestSubstringTwoDistinct(s: string): number {
  // We define the variables `left`, `right`, and `maxLength`, and initialize them to `0`.
  let left = 0;
  let right = 0;
  let maxLength = 0;

  // We initialize a `map`, which is a Map data structure. It will store characters as keys (type `string`)
  // and the number of their occurrences as values (type `number`).
  const map = new Map<string, number>();

  // We define a `while` loop that iterates as long as `right` is less than the length of `s`.
  while (right < s.length) {
    // We define a variable `char` and initialize it with `s[right]`,
    // which is the character at the `right` index of the string `s`.
    const char = s[right];

    // We use the `set` method to add `char` to the map or increment its count by one
    // if the character already exists. If the character does not exist, we use a default value of zero.
    map.set(char, (map.get(char) || 0) + 1);

    // We define a `while` loop that iterates as long as the size of the map is greater than 2.
    while (map.size > 2) {
      // We define `leftChar` and initialize it with `s[left]`, which is the character at the `left` index.
      const leftChar = s[left];

      // We use the `set` method to decrease the counter in the map by one for the character `leftChar`.
      const count = map.get(leftChar);
      if (count !== undefined) {
        map.set(leftChar, count - 1);
      }

      // We use an `if` statement to check if the count of `leftChar` in the map is equal to `0`,
      // and if the condition is met, we delete this character from the map.
      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }

      // We increment `left` by one to move the window forward.
      left++;
    }

    // We update `maxLength` by taking the maximum between its current value and `right - left + 1`.
    // The `Math.max` function returns the greater value.
    maxLength = Math.max(maxLength, right - left + 1);

    // We increase `right` by one to move the window forward.
    right++;
  }

  // We return `maxLength` as the result of the function —
  // it represents the length of the longest substring with at most two distinct characters.
  return maxLength;
}
