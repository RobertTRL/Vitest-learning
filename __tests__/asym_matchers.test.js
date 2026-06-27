import { test, describe, expect } from "vitest"

// Asymmetric matchers
// 
// Lets you describe what a value should look likw without pinning down the exact content
// Work inside any matcher that does deep comparison, like toEqual or toMatchObject
// 
// 1) expect.any(Constructor) -> matches any value created within the given constructor
// 2) expect.stringContaining(str) -> matches a string that includes the given substring
// 3) expect.stringMatching(regex) -> matches a string against a regular expression
// 4) expect.arrayContaing(arr) -> matches an array that includes all items in the expected array
// 5) expect.objectContaing(obj) -> matches an object that includes the specified properties

test('user has the right shape', () => {
  const user = {
    "id": 1,
    "name" : "Alice",
    "email" : "alice@example.com",
    "roles" : ["viewer"]
  }

  expect(user).toEqual({
    id: expect.any(Number),
    name: 'Alice',
    email: expect.stringContaining('@'),
    roles: expect.arrayContaining(['viewer']),
  })
})