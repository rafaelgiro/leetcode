import { isAnagram } from "./is-anagram";

const scenarios = [
  { s: "anagram", t: "nagaram", output: true },
  { s: "anagram", t: "nagaramm", output: false },
  { s: "rat", t: "car", output: false },
  { s: "aacc", t: "ccac", output: false },
];

describe("isAnagram", () => {
  it.each(scenarios)("returns $output for $s with $t", ({ s, t, output }) => {
    expect(isAnagram(s, t)).toBe(output);
  });
});
