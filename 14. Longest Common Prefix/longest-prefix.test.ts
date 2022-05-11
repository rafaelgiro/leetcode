import { longestCommonPrefix } from "./longest-prefix";

const tests = [
  { array: ["flower", "flow", "flight"], output: "fl" },
  { array: ["dog", "racecar", "car"], output: "" },
  { array: ["a"], output: "a" },
  { array: ["ab", "a"], output: "a" },
  { array: ["reflower", "flow", "flight"], output: "" },
];

describe("Longest Common Prefix", () => {
  it.each(tests)("should return $output for $array", ({ output, array }) => {
    expect(longestCommonPrefix(array)).toBe(output);
  });
});
