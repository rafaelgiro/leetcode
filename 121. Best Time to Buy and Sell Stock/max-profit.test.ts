import { maxProfit } from "./max-profit";

const scenarios = [
  { input: [7, 1, 5, 3, 6, 4], output: 5 },
  { input: [7, 6, 4, 3, 1], output: 0 },
  { input: [4, 9, 2, 8, 5], output: 6 },
  { input: [4, 9, 2, 6, 5], output: 5 },
  { input: [2, 3, 4, 10, 5], output: 8 },
];

describe("maxProfit", () => {
  it.each(scenarios)(
    "should return $output for $input",
    ({ input, output }) => {
      expect(maxProfit(input)).toEqual(output);
    }
  );
});
