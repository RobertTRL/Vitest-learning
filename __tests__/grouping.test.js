import { describe, test, expect, it } from "vitest"

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

// You can use test or it
// test.only is used to only run this test and skip everything else
// test.skip is used to skip this test without removing it
// test.todo lets you mark a placeholder for a test you haven't written