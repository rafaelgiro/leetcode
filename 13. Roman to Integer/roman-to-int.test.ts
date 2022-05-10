import { romanToInt } from "./roman-to-int";

const tests = [
  { roman: "I", integer: 1 },
  { roman: "V", integer: 5 },
  { roman: "X", integer: 10 },
  { roman: "L", integer: 50 },
  { roman: "C", integer: 100 },
  { roman: "D", integer: 500 },
  { roman: "M", integer: 1000 },
  { roman: "IV", integer: 4 },
  { roman: "IX", integer: 9 },
  { roman: "XL", integer: 40 },
  { roman: "XC", integer: 90 },
  { roman: "CD", integer: 400 },
  { roman: "CM", integer: 900 },
  { roman: "LVIII", integer: 58 },
  { roman: "MCMXCIV", integer: 1994 },
];

describe("Roman to Integer", () => {
  it.each(tests)("should return $integer for $roman", ({ roman, integer }) => {
    expect(romanToInt(roman)).toBe(integer);
  });
});
