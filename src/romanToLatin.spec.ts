import { romanToLatin } from "./";

describe("test latinToRoman function", () => {
  it("should return a number", function () {
    const result = romanToLatin("I");
    expect(typeof result).toBe("number");
  });
});
