const { describe, expect, test } = require("@jest/globals")

let BinaryTree = require("../../trees/BinaryTree.js")
let BinarySearchTree = require("../../trees/BinarySearchTree.js")
let Node = require("../../trees/Node.js")
let treeIntersection = require("../treeIntersection.js")

describe("Check for common values in to Binary trees", () => {
  test("Simple Binary Tree check", () => {
    const a = new Node(1)
    const b = new Node(2)
    const c = new Node(3)
    const d = new Node(3)
    const e = new Node(4)
    const f = new Node(5)
    const g = new Node(6)
    const h = new Node(7)
    const i = new Node(8)

    let tree1 = new BinaryTree()
    tree1.root = a
    a.left = b
    a.right = c
    b.left = g
    b.right = h

    let tree2 = new BinaryTree()
    tree2.root = d
    d.left = e
    d.right = f
    e.left = g
    e.right = i
    f.left = h
    expect(treeIntersection(tree1, tree2)).toMatchObject([3, 6, 7])
  })

  test("Large Binary Tree check", () => {
    const a = new Node(150)
    const b = new Node(100)
    const c = new Node(75)
    const d = new Node(160)
    const e = new Node(125)
    const f = new Node(175)
    const g = new Node(250)
    const h = new Node(200)
    const i = new Node(350)
    const j = new Node(300)
    const k = new Node(500)

    let tree1 = new BinaryTree()
    tree1.root = a
    // left side
    a.left = b
    a.right = g
    b.left = c
    b.right = d
    d.left = e
    d.right = f

    //right side
    g.left = h
    g.right = i
    i.left = j
    i.right = k

    let tree2 = new BinaryTree()
    const l = new Node(42)
    const m = new Node(100)
    const n = new Node(600)
    const o = new Node(15)
    const p = new Node(160)
    const q = new Node(125)
    const r = new Node(175)
    const s = new Node(200)
    const t = new Node(350)
    const u = new Node(4)
    const v = new Node(500)

    tree2.root = l
    // left side
    l.left = m
    l.right = n
    m.left = o
    m.right = p
    p.left = q
    p.right = r

    //right side
    n.left = s
    n.right = t
    t.left = u
    t.right = v

    expect(treeIntersection(tree1, tree2)).toMatchObject([
      100, 160, 125, 175, 200, 350, 500,
    ])
  })

  test("Works on Binary Search Trees as well", () => {
    let tree1 = new BinarySearchTree()
    let tree2 = new BinarySearchTree()
    tree1.add(150)
    tree1.add(100)
    tree1.add(75)
    tree1.add(160)
    tree1.add(125)
    tree1.add(175)
    tree1.add(250)
    tree1.add(200)
    tree1.add(350)
    tree1.add(300)
    tree1.add(500)

    tree2.add(42)
    tree2.add(100)
    tree2.add(600)
    tree2.add(15)
    tree2.add(160)
    tree2.add(125)
    tree2.add(175)
    tree2.add(200)
    tree2.add(350)
    tree2.add(4)
    tree2.add(500)

    expect(treeIntersection(tree1, tree2)).toMatchObject([
      100, 160, 125, 175, 200, 350, 500,
    ])
  })
})
