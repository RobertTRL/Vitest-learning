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

test.for([
    {a: 1, b: 1, sum: 2},
    {a: 2, b: 3, sum: 5},
    {a: 10, b: 0, sum: 10},
])("The sum of $a and $b is $sum", ({a, b, sum}) => {
    expect(a + b).toBe(sum)
})