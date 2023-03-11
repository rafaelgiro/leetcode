import { search } from "./search";

const scenarios = [
  { nums: [-1, 0, 3, 5, 9, 12], target: 9, output: 4 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 2, output: -1 },
  { nums: [0], target: 0, output: 0 },
  { nums: [], target: 0, output: -1 },
];

describe("search", () => {
  it.each(scenarios)(
    "it finds $target at index $output on array $nums",
    ({ nums, target, output }) => {
      expect(search(nums, target)).toBe(output);
    }
  );
});
