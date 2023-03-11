import { isPalindrome } from "./palidrome";

const scenarios = [
  { string: "A man, a plan, a canal: Panama", output: true },
  { string: "race a car", output: false },
  { string: "", output: true },
  { string: "12321", output: true },
  { string: "123321", output: true },
];

describe("isPalindrome", () => {
  it.each(scenarios)("It returns $output for $string", ({ string, output }) => {
    expect(isPalindrome(string)).toBe(output);
  });
});
