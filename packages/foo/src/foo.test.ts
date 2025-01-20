import { describe, it, expect } from "vitest";
import { foo } from "./foo";

describe("foo tests", () => {
  it("should foo", () => {
    expect(foo()).toBe("foo");
  });
});
