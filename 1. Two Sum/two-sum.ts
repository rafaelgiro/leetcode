export function twoSum(nums: number[], target: number): number[] {
  let currentIndex = 0;
  let sumIndex = 0;
  let result = [0, 0];

  while (currentIndex < nums.length) {
    sumIndex = currentIndex + 1;

    while (sumIndex < nums.length) {
      if (nums[currentIndex] + nums[sumIndex] === target) {
        result = [currentIndex, sumIndex];
        return result;
      }
      sumIndex += 1;
    }

    currentIndex += 1;
  }

  return result;
}

export function twoSumRefactor(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i += 1) {
    const difference = target - nums[i];

    if (typeof map[difference] === "number") return [map[difference], i];
    map[nums[i]] = i;
  }

  return [0, 0];
}
