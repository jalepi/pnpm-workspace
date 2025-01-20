import { describe, it, expect } from "vitest";
import * as index from ".";

describe("foo package exports tests", () => {
  it("should export foo", () => {
    expect(index).toBeDefined();
    expect(index).toMatchObject({
      foo: expect.any(Function) as typeof index.foo,
    } as const satisfies typeof index);
  });
});
