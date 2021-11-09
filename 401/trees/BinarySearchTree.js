const BinaryTree = require("./BinaryTree.js")
const Node = require("./Node.js")

class BinarySearchTree extends BinaryTree {
  constructor() {
    super()
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    }

    let current = this.root
    while (current) {
      if (value === current.value) {
        throw new Error("Duplicate value")
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value)
          break
        } else {
          current = current.left
        }
      } else {
        if (!current.right) {
          current.right = new Node(value)
          break
        } else {
          current = current.right
        }
      }
    }
  }

  contains(value) {
    let contains = false
    this.preOrder(this.root, (nodeValue) => {
      if (value === nodeValue) {
        contains = true
        return
      }
    })
    return contains
  }
}

module.exports = BinarySearchTree
