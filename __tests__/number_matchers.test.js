import { describe, test, expect } from "vitest"

// Number Matchers
// 1) .toBeLessThan -> checks if the value is less than the testing value
// 2) .toBeLessThanOrEqual -> checks if the value is less than or equal to the testing value
// 3) .toBeGreaterThan -> checks if the value is greater than the testing value
// 4) .toBeGreaterThanOrEqual -> checks if the value is greater than or equal to the testing value
// 5) .toBe / .toEqual -> checks for equal
// 6) .toBeCloseTo -> compares equality within a small rounding rounding errors

describe("Number Matchers", () => {
  test('number comparisons', () => {
    const value = 2 + 2

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

  test('adding floating point numbers', () => {
  const value = 0.1 + 0.2

  expect(value).not.toBe(0.3)
  expect(value).toBeCloseTo(0.3)
  
})

})