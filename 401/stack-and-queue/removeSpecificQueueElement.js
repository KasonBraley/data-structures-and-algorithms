const Queue = require("./queue.js")

function removeSpecificQueueElement(queue, element) {
  let tempQueue = new Queue()
  let count = 0
  let size = queue.getSize()

  // the element that is supposed to be removed actually gets "removed" in this while loop.
  // because if queue.front equals the element, the while loop will break,
  // and it doesn't get equeued into the temp queue
  while (!queue.isEmpty() && queue.front.value !== element) {
    tempQueue.enqueue(queue.front.value)
    queue.dequeue()
    count += 1
  }

  // if the queue is empty, that means the element wasn't found,
  // because the above loop should break as soon as queue.front equals the passed in element
  if (queue.isEmpty()) {
    console.warn(`element ${element} not found in queue`)
    while (!tempQueue.isEmpty()) {
      queue.enqueue(tempQueue.front.value)
      tempQueue.dequeue()
    }
  } else {
    // since the element was found, we still need to dequeue it from the original queue,
    // since it didn't have a chance to dequeue in the first while loop
    queue.dequeue()
    while (!tempQueue.isEmpty()) {
      queue.enqueue(tempQueue.front.value)
      tempQueue.dequeue()
    }

    // reorder the elements into the original order (minus the one removed)
    let elementsToMoveAround = size - count - 1
    while (elementsToMoveAround < 0) {
      elementsToMoveAround -= 1
      queue.enqueue(queue.front.value)
      queue.dequeue()
    }
  }
  return queue
}

module.exports = removeSpecificQueueElement
