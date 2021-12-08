const { describe, expect, test } = require("@jest/globals")
const { Graph, Vertex } = require("../graph.js")

describe("Graph implementation", () => {
  test("Node can be successfully added to the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    graph.addVertex(A)
    expect(graph.adjacencyList.size).toBe(1)
  })
  test("A collection of all nodes can be properly retrieved from the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    let B = new Vertex("B")

    graph.addVertex(A)
    graph.addVertex(B)

    expect(graph.getNodes()).toMatchObject([{ value: "A" }, { value: "B" }])
  })
  test("The proper size is returned, representing the number of nodes in the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    let B = new Vertex("B")
    let C = new Vertex("C")
    let D = new Vertex("D")
    graph.addVertex(A)
    graph.addVertex(B)
    graph.addVertex(C)
    graph.addVertex(D)

    expect(graph.getSize()).toBe(4)
  })
})
