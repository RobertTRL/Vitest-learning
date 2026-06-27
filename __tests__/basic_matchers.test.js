import { describe, expect, test } from "vitest"

// Common Matchers
// 1) .toBe -> checks equality using Object.is
// It works great for primitive values but doesn't work for non-primitive values
// 
// 2) .toEqual -> recursively compares every field of an object or item of an array, ignoring object identity
// 
// 3) .toStrictEqual -> stricter than .toEqual, checks undefined properties, distinguishes sparse arrays
//                      from undefined values, and verifies that objects have the same type

describe("Common Matchers", () => {test("2 plus 2 to be 4", () => {
        expect(2 + 2).toBe(4)
    })

    test('object assignment', () => {
    const data = { one: 1 }
    data.two = 2

    expect(data).toEqual({ one: 1, two: 2 })
    })

    test('toEqual vs toStrictEqual', () => {
    expect({ a: 1 }).toEqual({ a: 1, b: undefined })

    expect({ a: 1 }).not.toStrictEqual({ a: 1, b: undefined })

    class User {
        constructor(name) {
        this.name = name
        }
    }
    expect(new User('Alice')).toEqual({ name: 'Alice' })
    expect(new User('Alice')).not.toStrictEqual({ name: 'Alice' })
    })
})