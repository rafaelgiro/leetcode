import { maxArea } from "./container-with-most-water";

const tests = [
  { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], output: 49 },
  { height: [1, 1], output: 1 },
];

describe("Container With Most Water", () => {
  it.each(tests)("should return $output for $height", ({ height, output }) => {
    expect(maxArea(height)).toBe(output);
  });
});
