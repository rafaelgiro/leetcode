import { removeElement } from "./remove-element";

const tests = [
  {
    nums: [0, 1, 2, 2, 3, 0, 4, 2],
    val: 2,
    output: 5,
  },
  {
    nums: [3, 2, 2, 3],
    val: 3,
    output: 2,
  },
];

describe("Remove Element", () => {
  it.each(tests)(
    "should return $output for $string",
    ({ output, nums, val }) => {
      expect(removeElement(nums, val)).toStrictEqual(output);
    }
  );
});
