const Queue = require("../queue.js")
const removeSpecificQueueElement = require("../removeSpecificQueueElement.js")

class AnimalShelter {
  #dogs
  #cats
  #shelter

  constructor() {
    this.#shelter = new Queue()
    this.#dogs = new Queue()
    this.#cats = new Queue()
  }

  enqueue(animal) {
    if (animal.animal !== "dog" && animal.animal !== "cat") {
      throw new Error("Valid animals are 'dog' or 'cat'")
    }

    if (animal.animal === "dog") {
      this.#dogs.enqueue(animal)
      this.#shelter.enqueue(animal)
      return
    }
    this.#cats.enqueue(animal)
    this.#shelter.enqueue(animal)
  }

  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat") {
      if (typeof pref === "undefined") {
        let adoptedAnimal = this.#shelter.dequeue()
        if (adoptedAnimal.animal === "dog") {
          this.#dogs.dequeue()
        } else {
          this.#cats.dequeue()
        }

        return adoptedAnimal
      }
      return null
    }

    if (pref === "dog") {
      let adoptedDog = this.#dogs.dequeue()
      removeSpecificQueueElement(this.#shelter, adoptedDog)
      return adoptedDog
    } else {
      let adoptedCat = this.#cats.dequeue()
      removeSpecificQueueElement(this.#shelter, adoptedCat)
      return adoptedCat
    }
  }

  getDogs() {
    return this.#dogs.front
  }

  getCats() {
    return this.#cats.front
  }

  getShelterAnimals() {
    return this.#shelter.front
  }
}

let dog = {
  animal: "dog",
  name: "Ollie",
}
let cat = {
  animal: "cat",
  name: "Pumpkin",
}
let dog2 = {
  animal: "dog",
  name: "Mango",
}
let cat2 = {
  animal: "cat",
  name: "Bosley",
}

let animalShelter = new AnimalShelter()
animalShelter.enqueue(dog)
animalShelter.enqueue(cat)
console.log(1, animalShelter.getDogs())
console.log(2, animalShelter.getCats())
console.log(3, animalShelter.getShelterAnimals())
console.log(4, animalShelter.dequeue())
console.log(5, animalShelter.getDogs())
console.log(6, animalShelter.getCats())
console.log(7, animalShelter.getShelterAnimals())
animalShelter.enqueue(dog2)
animalShelter.enqueue(cat2)
console.log(8, animalShelter.getDogs())
console.log(9, animalShelter.getCats())
console.log(10, animalShelter.getShelterAnimals())
console.log(11, animalShelter.dequeue("dog"))
console.log(12, animalShelter.dequeue())
console.log(15, animalShelter.getDogs())
console.log(16, animalShelter.getCats())
console.log(17, animalShelter.getShelterAnimals())

module.exports = AnimalShelter
