const { describe, expect, test } = require("@jest/globals")

const Node = require("../Node.js")
const BinaryTree = require("../BinaryTree.js")
const BinarySearchTree = require("../BinarySearchTree.js")
const breadthFirst = require("../breadthFirst.js")

describe("Breath first function", () => {
  test("BinaryTree: It should return an array of all the values in the tree, in the breadth first order", () => {
    let binaryTree = new BinaryTree()
    const a = new Node(2)
    const b = new Node(7)
    const c = new Node(5)
    const d = new Node(2)
    const e = new Node(6)
    const f = new Node(5)
    const g = new Node(11)
    const h = new Node(9)
    const i = new Node(4)

    binaryTree.root = a
    a.left = b
    a.right = c

    a.left.left = d
    a.left.right = e

    a.left.right.left = f
    a.left.right.right = g

    a.right.right = h
    a.right.right.left = i

    expect(breadthFirst(binaryTree)).toMatchObject([2, 7, 5, 2, 6, 9, 5, 11, 4])
  })

  test("BinarySearchTree: It should return an array of all the values in the tree, in the breadth first order", () => {
    let searchTree = new BinarySearchTree()
    searchTree.add(5)
    searchTree.add(1)
    searchTree.add(2)
    searchTree.add(3)
    searchTree.add(4)
    searchTree.add(6)
    searchTree.add(7)
    searchTree.add(8)
    searchTree.add(9)

    expect(breadthFirst(searchTree)).toMatchObject([5, 1, 6, 2, 7, 3, 8, 4, 9])
  })
})
