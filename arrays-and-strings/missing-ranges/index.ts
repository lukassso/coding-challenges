function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): number[][] {
  const result: number[][] = [];

  let prev = lower - 1;

  nums.push(upper + 1);

  for (const curr of nums) {
    if (curr - prev > 1) {
      result.push([prev + 1, curr - 1]);
    }
    prev = curr;
  }

  return result;
}

const dd = findMissingRanges([0, 1, 3, 50, 75], 0, 500);
console.log(dd);
