import { expect } from "chai"
import { expected, test } from "vitest"

test.for([
    [1, 1, 2],
    [2, 3, 5],
    [10, 0, 10],
])("The sum of %i and %i is %i", ([a, b, sum]) => {
    expect(a + b).toBe(sum)
})

// %i integer
// %s string 
// %f float