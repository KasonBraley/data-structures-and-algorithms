# Repeated Word

# Challenge Summary
Finds the first repeated word in string.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Split the string parameter on non word characters, to account for spaces and special characters.
Loop through the created array, checking to see if the temporary array variable includes the current character we are looping over. If it does, immediately return that character from the function. If it doesn't, add that character to the array.

Could improve the efficiency by using a hash table instead of an array for more efficient lookup time.

## Solution
[Solution](./repeatedWord.js)

[Tests](./__tests__/repeatedWord.test.js)
