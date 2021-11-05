class BinaryTree {
  preOrder(root) {
    if (!root) {
      throw new Error("Parameter 'root' required")
    }

    console.log(root.value)

    if (root.left) {
      this.preOrder(root.left)
    }

    if (root.right) {
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (!root) {
      throw new Error("Parameter 'root' required")
    }

    if (root.left) {
      this.inOrder(root.left)
    }

    console.log(root.value)

    if (root.right) {
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (!root) {
      throw new Error("Parameter 'root' required")
    }
    let arr = []

    if (root.left) {
      this.postOrder(root.left)
    }

    if (root.right) {
      this.postOrder(root.right)
    }

    return arr.push(root.value)
  }
}

module.exports = BinaryTree
