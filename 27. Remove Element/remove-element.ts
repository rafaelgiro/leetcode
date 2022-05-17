export function removeElement(nums: number[], val: number): number {
  let numberOfValuesAtTheEnd = 0;
  let count = 0;

  while (count < nums.length - numberOfValuesAtTheEnd) {
    if (nums[count] === val) {
      nums[count] = nums[nums.length - 1 - numberOfValuesAtTheEnd];
      numberOfValuesAtTheEnd += 1;
    } else {
      count += 1;
    }
  }

  return nums.length - numberOfValuesAtTheEnd;
}
