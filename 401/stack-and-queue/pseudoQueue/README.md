# PseudoQueue

My implementation of a Pseudo Queue using 2 stacks as the internal data structure in JavaScript with tests to verify the functionality.

## Challenge

Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
Internally, utilize 2 Stack instances to create and manage the queu

## Approach & Efficiency

Use the dequeue method to do all the heavy lifting so the nodes only have to be moved once

## API

`enqueue`\
`Arguments`: value

- adds a new node with that value to the back of the queue with an O(1) Time performance.

`dequeue`\
`Arguments`: none\
`Returns`: the value from node from the front of the queue

- Removes the node from the front of the queue\
- Should raise exception when called on empty queue

`getStack1`\
`Returns`: the `top` property off of the internal stack 1

`getStack2`\
`Returns`: the `top` property off of the internal stack 2
