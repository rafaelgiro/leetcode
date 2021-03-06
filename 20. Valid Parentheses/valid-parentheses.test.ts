import { isValid } from "./valid-parentheses";

const tests = [
  { string: "()", output: true },
  { string: "(", output: false },
  { string: "()[]{}", output: true },
  { string: "(}", output: false },
  { string: "{()}[]", output: true },
  { string: "((()))", output: true },
  { string: "([)", output: false },
  { string: "]", output: false },
  { string: "(){}}{", output: false },
  { string: "({{{{}}}))", output: false },
];

describe("Valid Parentheses", () => {
  it.each(tests)("should return $output for $string", ({ output, string }) => {
    expect(isValid(string)).toBe(output);
  });
});
