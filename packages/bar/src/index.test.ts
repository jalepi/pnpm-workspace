import { describe, it, expect } from "vitest";
import * as index from ".";

describe("bar package exports tests", () => {
  it("should export foo and bar", () => {
    expect(index).toBeDefined();
    expect(index).toMatchObject({
      foo: expect.any(Function) as typeof index.foo,
      bar: expect.any(Function) as typeof index.bar,
    } as const satisfies typeof index);
  });
});
