const { describe, expect, test } = require("@jest/globals")
const AnimalShelter = require("../animalShelter.js")

describe("Animal Shelter class functionality", () => {
  let dog = {
    animal: "dog",
    name: "Ollie",
  }
  let dog2 = {
    animal: "dog",
    name: "Mango",
  }
  let cat = {
    animal: "cat",
    name: "Pumpkin",
  }
  let cat2 = {
    animal: "cat",
    name: "Bosley",
  }
  let rodent = {
    animal: "rodent",
    name: "Ratatoulli",
  }

  const animalShelter = new AnimalShelter()

  test("Enqueu", () => {
    animalShelter.enqueue(dog)
    animalShelter.enqueue(dog2)
    animalShelter.enqueue(cat)
    animalShelter.enqueue(cat2)
    expect(animalShelter.getDogs().value.name).toBe("Ollie")
    expect(animalShelter.getDogs().next.value.name).toBe("Mango")
    expect(animalShelter.getCats().value.name).toBe("Pumpkin")
    expect(animalShelter.getCats().next.value.name).toBe("Bosley")
    expect(() => animalShelter.enqueue(rodent)).toThrow(
      "Valid animals are 'dog' or 'cat'"
    )
  })

  test("Dequeu", () => {
    expect(animalShelter.dequeue("dog").name).toBe("Ollie")
    expect(animalShelter.dequeue("cat").name).toBe("Pumpkin")
    expect(animalShelter.dequeue("rodent")).toBeNull()
    expect(animalShelter.getDogs().value.name).toBe("Mango")
    expect(animalShelter.getCats().value.name).toBe("Bosley")
    animalShelter.dequeue("dog")
    animalShelter.dequeue("cat")
    expect(animalShelter.getDogs()).toBeNull()
    expect(animalShelter.getCats()).toBeNull()
  })
})
