const Node = require("../Node.js")
const BinaryTree = require("../BinaryTree.js")
const BinarySearchTree = require("../BinarySearchTree.js")
const { describe, expect, test } = require("@jest/globals")

describe("BinaryTree", () => {
  const a = new Node(1)
  const b = new Node(2)
  const c = new Node(3)
  const binaryTree = new BinaryTree()
  binaryTree.root = a
  a.left = b
  a.right = c

  test("Can instantiate an empty tree", () => {
    expect(() => new BinaryTree()).not.toThrow()
  })

  test("Can instantiate a tree with a single root node", () => {
    expect(() => new BinaryTree(a)).not.toThrow()
  })

  test("Can add a left and right child to a single root node", () => {
    expect(binaryTree.root.value).toBe(1)
    expect(binaryTree.root.left.value).toBe(2)
    expect(binaryTree.root.right.value).toBe(3)
  })

  test("Can return a collection from a pre-order traversal", () => {
    let results = []

    function cb(value) {
      results.push(value)
    }

    binaryTree.preOrder(binaryTree.root, cb)

    expect(results).toMatchObject([1, 2, 3])
  })

  test("Can return a collection from a in-order traversal", () => {
    let results = []
    function cb(value) {
      results.push(value)
    }

    binaryTree.inOrder(binaryTree.root, cb)

    expect(results).toMatchObject([2, 1, 3])
  })

  test("Can return a collection from a post-order traversal", () => {
    let results = []
    function cb(value) {
      results.push(value)
    }

    binaryTree.postOrder(binaryTree.root, cb)

    expect(results).toMatchObject([1, 2, 3])
  })

  test("Can find the largest value in a binary tree", () => {
    expect(binaryTree.findMax()).toBe(3)
  })

  test("Can find the smallest value in a binary tree", () => {
    expect(binaryTree.findMin()).toBe(1)
  })
})

describe("Binary Search Tree", () => {
  test("Binary search tree methods; add, contains", () => {
    let searchTree = new BinarySearchTree()
    searchTree.add(1)
    searchTree.add(2)
    searchTree.add(3)
    expect(searchTree.contains(1)).toBeTruthy()
    expect(searchTree.contains(2)).toBeTruthy()
    expect(searchTree.contains(3)).toBeTruthy()
    expect(searchTree.contains(4)).toBeFalsy()
  })
})
