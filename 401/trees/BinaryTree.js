class BinaryTree {
  constructor(root = null) {
    this.root = root
  }

  preOrder(root, cb) {
    if (!root) {
      throw new Error("Parameter 'root' required")
    }

    cb(root.value)

    if (root.left) {
      this.preOrder(root.left, cb)
    }

    if (root.right) {
      this.preOrder(root.right, cb)
    }
  }

  inOrder(root, cb) {
    if (!root) {
      throw new Error("Parameter 'root' required")
    }

    if (root.left) {
      this.inOrder(root.left, cb)
    }

    cb(root.value)

    if (root.right) {
      this.inOrder(root.right, cb)
    }
  }

  postOrder(root, cb) {
    if (!root) {
      throw new Error("Parameter 'root' required")
    }

    cb(root.value)

    if (root.left) {
      this.postOrder(root.left, cb)
    }

    if (root.right) {
      this.postOrder(root.right, cb)
    }
  }

  findMax() {
    if (!this.root) {
      throw new Error("Empty binary tree")
    }

    let maxValue = 0

    this.preOrder(this.root, (value) => {
      if (value > maxValue) {
        maxValue = value
      }
    })

    return maxValue
  }

  findMin() {
    if (!this.root) {
      throw new Error("Empty binary tree")
    }

    let minValue = this.root.value

    this.preOrder(this.root, (value) => {
      if (value < minValue) {
        minValue = value
      }
    })

    return minValue
  }
}

module.exports = BinaryTree
