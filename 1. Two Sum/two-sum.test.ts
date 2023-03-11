import { twoSum, twoSumRefactor } from "./two-sum";
const tests = [
  { input: [2, 7, 11, 15], target: 9, output: [0, 1] },
  { input: [3, 2, 4], target: 6, output: [1, 2] },
  { input: [3, 3], target: 6, output: [0, 1] },
  { input: [1, 2, 3, 4], target: 6, output: [1, 3] },
];

describe("Two Sum", () => {
  it.each(tests)(
    "should return $output for $input with $target as target",
    ({ input, target, output }) => {
      expect(twoSumRefactor(input, target)).toStrictEqual(output);
    }
  );
});
