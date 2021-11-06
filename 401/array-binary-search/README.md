# Binary search in a sorted 1D array

**Challenge**: \
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.\

**NOTE:** The search algorithm used in your function should be a binary search

## Inputs / Outputs

| Input                                   | Output |
| --------------------------------------- | ------ |
| `[4, 8, 15, 16, 23, 42]`, `15`          | `2`    |
| `[-131, -82, 0, 27, 42, 68, 179]`, `42` | `4`    |
| `[11, 22, 33, 44, 55, 66, 77]`, `90`    | `-1`   |
| `[1, 2, 3, 5, 6, 7]`, `4`               | `-1`   |

## Algorithm

Get length of array
Compare middle array element with the target value

- if the same value, return the element

- if target value is less than the element, search the lower half of the array

- if target value is greater than the element, search the upper half of the array

## Pseudocode

```
BinarySearch(array, searchKey)
// INPUT <- sorted array, number
// OUTPUT <-  index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array

declare length <- array.length
loop through array, find middle index

```

## Code

## Visual

![array-binary-search](./array-binary-search.png)
