/*
Step 1: Problem Analysis
We are given two strings, num1 and num2, which represent non-negative integers.
We are not allowed to convert them directly to numbers (e.g., using parseInt, BigInt, etc.).
We must multiply the strings and return the result as a string.
The input strings can be very large.
We simulate multiplication just like on paper – digit by digit.

Step 2: Algorithm – Column-Based Multiplication (Like on Paper)
We reverse both strings so we can start multiplying from the least significant digits.
We create a res[] array of length num1.length + num2.length to store partial sums.
For each digit i from num1, we multiply it by each digit j from num2 and add the result to res[i + j].
We handle the carry and update the res[] array accordingly.
We remove leading zeros and return the final result as a string.

Step 3: Implementation
*/

// We define a function that takes two parameters
// The function returns a string, which is the result of the multiplication
function multiply(num1: string, num2: string): string {
  // If any of the numbers is zero, the result is always zero – no further computation is needed
  if (num1 === "0" || num2 === "0") return "0";

  // We split both strings into character arrays and reverse them so we can start multiplying from the end.
  // We fill the res array with zeros – it will store the partial sums and carries.
  const n1 = num1.split("").reverse();
  const n2 = num2.split("").reverse();
  const res = new Array(n1.length + n2.length).fill(0);

  // We define a for loop with 'i' starting at 0, and it runs while 'i' is less than 'n1.length', incrementing by one
  for (let i = 0; i < n1.length; i++) {
    // Inside it, we define another loop with 'j' from 0 to 'n2.length', also incrementing by one
    for (let j = 0; j < n2.length; j++) {
      // For each pair of digits, we multiply them and add the result to res[i + j]
      const mul = Number(n1[i]) * Number(n2[j]);
      res[i + j] += mul;
    }
  }

  // We iterate through the 'res' array using a 'for' loop with variable 'k' starting at 0 and running while 'k' is less than 'res.length'
  for (let k = 0; k < res.length; k++) {
    // Inside the loop, we split the value at 'res[k]' into the digit (ones place) and the carry
    const digit = res[k] % 10;
    // We calculate the 'carry'
    const carry = Math.floor(res[k] / 10);
    // We update 'res[k]' to hold only the digit
    res[k] = digit;
    // If the carry is greater than 0, we add it to the next position in the 'res' array
    if (carry > 0) {
      res[k + 1] += carry;
    }
  }

  // We define a while loop that runs as long as the length of 'res' is greater than 1 and the last digit is 0
  while (res.length > 1 && res[res.length - 1] === 0) {
    // If the condition is met, we remove the last element from the array
    res.pop();
  }
  // We reverse the res array to restore the original digit order
  // Finally, we join the digits into a single string and return it
  return res.reverse().join("");
}
