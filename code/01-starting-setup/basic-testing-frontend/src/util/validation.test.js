import { it, expect, describe } from "vitest";

describe("validateStringNotEmpty()", () => {
  it("should throw an error, if an empty string is provided", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });
});
