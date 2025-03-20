/*
Step 1: Problem Analysis
1. We are given a string s that contains only characters.
2. Characters include uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special symbols.
3. We have to find the longest substring without duplicate characters.
4. A substring means that characters must be in the correct order and consecutive.
5. We return the length of this substring.

Step 2: Algorithm Chosen – Sliding Window with Set Approach
1. We use a Set to track unique characters in the current window.
2. We slide the pointers left and right from the beginning of the string s.
3. We add s[right] to the Set as long as there are no duplicates.
4. If we encounter a duplicate, we move left until the Set becomes unique again.
5. Each time, we update maxLength to store the maximum length of the substring.
6. The time complexity is O(n), because each character is processed only once

Step 3: Implementation
*/
// We define a function that takes 's' as a string.
// The function returns a number representing the length of the longest substring without duplicate characters.
function lengthOfLongestSubstring(s: string): number {
  // We define a variable and initialize its value as a new 'Set' object, which stores a set of strings.
  // Additionally, we initialize the variables 'left' and 'maxLength' to zero.
  const charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  // We set a for loop where 'right' is an iterator and runs as long as it is smaller than the length of 's'
  for (let right = 0; right < s.length; right++) {
    // If a duplicate character is found, remove characters from the left.
    // Inside the loop, we define a while loop that continues running while 'charSet' contains 's[right]'.
    while (charSet.has(s[right])) {
      // Inside the while loop, we delete 's[left]' from 'charSet' and increment 'left' by one.
      charSet.delete(s[left]);
      left++;
    }
    // After exiting the while loop, we add 's[right]' to 'charSet' as a unique character.
    charSet.add(s[right]);

    // We update maxLength using the Math.max method, which selects the greater value between parameters
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the longest substring length
  return maxLength;
}

const result = lengthOfLongestSubstring("abcabcbb");
console.log(result);
