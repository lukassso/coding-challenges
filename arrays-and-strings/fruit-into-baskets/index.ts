/*
Step 1: Problem Analysis
1. We are given an array fruits[], where fruits[i] represents the type of fruit at index i.
2. We can carry only two types of fruits at a time, but we can pick an unlimited number of fruits of the same type.
3. We need to find the maximum number of fruits we can collect in a single contiguous subarray of fruits.
4. We must use an optimal algorithm in terms of time complexity, ideally O(n).

Step 2: Algorithm Chosen – Sliding Window Approach
1. We use two pointers, left and right, to define a sliding window that contains at most two types of fruits.
2. We iterate through the fruits array using the right pointer, adding fruits to a Map that tracks how many of each fruit type we have in the basket.
3. When a third fruit type appears in the sliding window, we move left, removing fruits until only two types remain in the window.
4. We update maxFruits to store the maximum number of fruits picked in a single subarray.

Step 3: Code implementation
*/
// We declare a function that takes parameter which is and array of numbers.The function returns a number
function totalFruit(fruits: number[]): number {
  // We declare variables 'left' and ' maxFruits', initializing them to 0
  let left = 0;
  let maxFruits = 0;
  // we define backet and initialize it as a new Map, where both the key and value are numbers. The map track the count of each fruit type within the sliding window
  const basket = new Map<number, number>();

  // Iterate over the fruits array
  for (let right = 0; right < fruits.length; right++) {
    // Inside the loop we update the basket map by setting a new key-value pair:
    // The key is type at index 'right'
    // The value is the current count of that fruit in the basket, retrieving and incrementing by one
    basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

    // we need to ensure the basket contains at most two types of fruits
    // we define a 'while' loop that checks if 'basket.size' exceeds 2
    while (basket.size > 2) {
      // we define 'getFruit' to get the count of the fruit at index 'left'
      const getFruit = basket.get(fruits[left]);
      // we update the basket map by setting a new key-value pair
      basket.set(fruits[left], (getFruit || 0) - 1);
      // we use 'if' statement to check if the 'left' is no longer in the basket
      if (getFruit === 0) {
        // if so we delete value from the basket to maintain the limit of two types
        basket.delete(fruits[left]);
      }
      // finaly we incremetn 'left' by 1
      left++;
    }
    // we update maxFruits by taking the maximum value between the current maxFruits and the length of the current sliding window
    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}
