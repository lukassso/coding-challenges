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
// we define a function that takes 'time' as a parameter which is a string. The function returns a string "hh:mm" format.
function nextClosestTime(time: string): string {
  // We define variable and initialize it as a "Set" object. 
  // Inside the "Set" we apply the 'replace' and 'split' methods on the 'time' string.
  // we store the digits in the Set to keep only unique values
  const digits = new Set(time.replace(":", "").split(""));
  // we define a variable which is an array of strings and initialize it aas an empty array
  const possibleTimes: string[] = [];
  // we iterate through digits using nested loops for each digit in the Set object
  for (const h1 of digits)
      for (const h2 of digits)
          for (const m1 of digits)
              for (const m2 of digits) {
                //  In the innermost loop we check if hours and minutes represent a valid time
                  const hours = `${h1}${h2}`;
                  const minutes = `${m1}${m2}`;
                  if (+hours < 24 && +minutes < 60) {
                      // if the condition is met we add valid time to possibleTimes array
                      possibleTimes.push(`${hours}:${minutes}`);
                  }
              }

  // Sort times and return the next closest or the smallest available
  possibleTimes.sort();
  //  we define a variable and initialie it as the index of the current time
  const currentIndex = possibleTimes.indexOf(time);
  //  If no greater time exists we return the smallest available time
  return possibleTimes[currentIndex + 1] ?? possibleTimes[0];
}
