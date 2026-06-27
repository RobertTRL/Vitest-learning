import { test, describe, expect } from "vitest"

// Exceptions Matchers
// 1) .toThrow -> verify that a function throws an error
// You need to wrap an error in another function so that Vitest can catch the error 

function compileCode(code) {
  if (code === '') {
    throw new Error('Cannot compile empty string')
  }
  return code
}

test('compiling an empty string throws', () => {
  expect(() => compileCode('')).toThrow()
  
  expect(() => compileCode('')).toThrow('Cannot compile empty string')

  expect(() => compileCode('')).toThrow(/empty string/)

})

// Soft Assrtions Matchers
// 1) expect.soft -> records a failing test but lets the test keep running

test('check multiple fields', () => {
  const user = { name: 'Alice', age: 30, role: 'admin' }

  expect.soft(user.name).toBe('Alice')
  expect.soft(user.age).toBe(25) // this fails but execution continues
  expect.soft(user.role).toBe('admin')
  // the test report will show that age didn't match
})