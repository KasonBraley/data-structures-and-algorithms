const { describe, expect, test } = require("@jest/globals")
const insertionSort = require("../insertionSort.js")

describe("Insertion Sort", () => {
  test("It should correctly sort an array", () => {
    const array = [8, 4, 23, 42, 16, 15]
    expect(insertionSort(array)).toMatchObject([4, 8, 15, 16, 23, 42])
  })

  test("Works with duplicate values", () => {
    const array = [8, 4, 4, 23, 42, 42, 16, 15, 15]
    expect(insertionSort(array)).toMatchObject([
      4, 4, 8, 15, 15, 16, 23, 42, 42,
    ])
  })

  test("Does not fail on one value in an array", () => {
    const array = [1]
    expect(insertionSort(array)).toMatchObject([1])
  })

  test("Does not fail on negative values", () => {
    const array = [8, -4, -23, -42, 16, 15]
    expect(insertionSort(array)).toMatchObject([-42, -23, -4, 8, 15, 16])
  })
})
