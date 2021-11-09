const Queue = require("../stack-and-queue/queue.js")

function breadthFirst(tree) {
  if (!tree) {
    throw new Error("Missing parameter")
  }

  let treeValues = []

  const queue = new Queue()
  queue.enqueue(tree.root)

  while (!queue.isEmpty()) {
    const root = queue.dequeue()
    treeValues.push(root.value)

    if (root.left) {
      queue.enqueue(root.left)
    }

    if (root.right) {
      queue.enqueue(root.right)
    }
  }

  return treeValues
}

module.exports = breadthFirst
