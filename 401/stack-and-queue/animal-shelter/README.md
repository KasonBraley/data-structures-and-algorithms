# Animal Shelter class

My implementation of an Animal Shelter class using 2 queues as the internal data structure in JavaScript with tests to verify the functionality.

## Challenge

- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.
- Implement the following methods:

  - `enqueue`\
    Arguments: animal\
    `animal` can be either a dog or a cat object.

  - `dequeue`\
    Arguments: pref\
    `pref` can be either "dog" or "cat"
    Return: either a dog or a cat, based on preference.
    If `pref` is not "dog" or "cat" then return null.

## Approach & Efficiency

Uses simple conditional logic to check the incoming parameter values and makes decisions based off that.

## API

`enqueue`\
`Arguments`: animal

- adds a new object with that value to the front of that animal's queue

`dequeue`\
`Arguments`: pref\
`Returns`: returns either a dog or cat based on the preference

- Removes the object from the front of that animal's queue\
- Returns `null` if `pref` is not "dog" or "cat"

`getDogs`\
`Returns`: the `front` property off of the internal dog queue

`getCats`\
`Returns`: the `front` property off of the internal cat queue
