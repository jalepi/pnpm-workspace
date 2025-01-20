import { describe, it, expect } from "vitest";
import { bar } from "./bar";

describe("bar tests", () => {
  it("should bar", () => {
    expect(bar()).toBe("foo bar");
  });
});
