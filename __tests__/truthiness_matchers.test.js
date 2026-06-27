import { test, describe, expect } from "vitest"

// Truthiness Matchers
// 1) .toBeNull -> matches ONLY null
// 2) .toBeUndefined -> matches ONLY undefined
// 3) .toBeDefined -> matches anything that isn't undefined, opposite of .toBeUndefined
// 4) .toBeTruthy -> matches anything that an if statement would treat as true / truthy values
// 5) .toBeFalsy -> matches anything that an if statement would treat as false / falsy values
// 
// Note:
// Falsy values - false, 0, +0, -0, 0n, "", '', `` (Any empty string), null, undefined, NaN, document.all
// Truthy values - any value that is not a falsy value
// null and undefined are nullish values

describe("Truthiness Matchers", () => {
  test('null checks', () => {
    const n = null

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
    expect(n).not.toBeUndefined()

})

})