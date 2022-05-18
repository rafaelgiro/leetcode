import { convert } from "./zigzag-conversion";

const tests = [
  { string: "PAYPALISHIRING", numRows: 3, output: "PAHNAPLSIIGYIR" },
  { string: "PAYPALISHIRING", numRows: 4, output: "PINALSIGYAHRPI" },
  { string: "A", numRows: 1, output: "A" },
];

describe("Roman to Integer", () => {
  it.each(tests)(
    "should return $outpur for $string with $numRows as a param",
    ({ string, numRows, output }) => {
      expect(convert(string, numRows)).toBe(output);
    }
  );
});
