import { test, expect } from "vitest"

test("Math.sqrt works for perfect squares", () => {
    expect(Math.sqrt(4).toBe(2))
    expect(Math.sqrt(9).toBe(3))
    expect(Math.sqrt(1).toBe(1))
    expect(Math.sqrt(0).toBe(0))
})