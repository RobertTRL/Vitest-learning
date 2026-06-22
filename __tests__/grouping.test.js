import { describe, test, expect } from "vitest"

describe("Simple Math.sqrt tests", () => {
    test("Returns an integer for perfect squares", () => {
        expect(Math.sqrt(9)).toBe(3)
        expect(Math.sqrt(4)).toBe(2)
    })

    test("Returns zero for zero", () => {
        expect(Math.sqrt(0)).toBe(0)
    })

    test("Returns NaN for negative numbers", () => {
        expect(Math.sqrt(-1)).toBeNaN()
    })
})