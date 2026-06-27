import { test, describe, expect } from "vitest"

// String Matchers
// 1) .toMatch -> test stings against Regex

describe("String Matchers", () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

  test('version string matches semver format', () => {
    expect('vitest@1.0.0').toMatch(/vitest@\d+\.\d+\.\d+/)
})  

})