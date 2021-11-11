const Node = require("../Node.js")
const KaryTree = require("../KaryTree.js")
const fizzBuzzTree = require("../fizzBuzzTree.js")
const { describe, expect, test } = require("@jest/globals")

describe("Fizz Buzz implementation", () => {
  test("Can construct a kary tree that respects the max number of children defined in the node and run Fizz Buzz on it", () => {
    // probably not how kary trees are supposed to work / be constructed
    let a = new Node(1, 3)
    let b = new Node(2, 3)
    let c = new Node(3, 3)
    let d = new Node(4, 3)
    let e = new Node(5, 3)
    let f = new Node(15, 3)
    let kary = new KaryTree()

    kary.root = a
    a.children[0] = b
    a.children[1] = c
    a.children[2] = d

    b.children[0] = c
    b.children[1] = d
    b.children[2] = e

    c.children[0] = d
    c.children[1] = e

    d.children[0] = f

    let values = fizzBuzzTree(kary)
    expect(values).toStrictEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Fizz",
      "4",
      "Buzz",
      "4",
      "Buzz",
      "FizzBuzz",
      "4",
      "Buzz",
      "FizzBuzz",
      "FizzBuzz",
      "FizzBuzz",
    ])
  })
})
