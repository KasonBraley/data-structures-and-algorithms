# Tree Intersection

## Challenge Summary
Find common values in 2 binary trees.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Took advantage of the preOrder traversal I created, that allows the use of a callback. So two separate callbacks are used. First one is to add all values from first tree to a hashtable, second callback on the second tree checks the hashtable to see if that key is already in the hashtable (from the first tree).

## Solution
[Solution](./treeIntersection.js)

[Tests](./__tests__/treeIntersection.test.js)
