import { describe, test, expect } from "vitest"

// Object Matchers
// 1) .toContain -> checks if any iterable includes a particular item, uses === so it works well for primitive values
// 2) .toContainEqual -> checks if an array contains an object with a particular structure
// 3). toMatchObject -> checks if an object contains the properties you specify
// 4) .toHaveProperty -> checks if an object contain an individual property, you pass a dot separated path and an expected value
 
test('the shopping list has milk in it', () => {
  const shoppingList = ['milk', 'bread', 'eggs', 'butter']

  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

test('user has expected fields', () => {
  const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    createdAt: '2024-01-01'
  }

  expect(user).toMatchObject({
    name: 'Alice',
    email: 'alice@example.com',
  })
})

test('object has property', () => {
  const user = {
    name: 'Alice',
    address: { city: 'Paris', zip: '75001' }
  }

  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('name', 'Alice')
  expect(user).toHaveProperty('address.city', 'Paris')
  expect(user).toHaveProperty('address.zip')
})