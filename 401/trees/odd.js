const Queue = require("../stack-and-queue/queue.js")

function sumOdd(tree) {
  if (!tree) {
    throw new Error("no tree")
  }

  let sum = 0
  let queue = new Queue()
  queue.enqueue(tree.root)

  while (!queue.isEmpty()) {
    let node = queue.dequeue()

    if (node.value % 2 !== 0) {
      sum += node.value
    }

    if (node.left) {
      queue.enqueue(node.left)
    }

    if (node.right) {
      queue.enqueue(node.right)
    }
  }

  return sum
}

module.exports = sumOdd
