const { describe, expect, test } = require("@jest/globals")
const { Graph, Vertex } = require("../graph.js")

describe("Graph implementation", () => {
  test("Node can be successfully added to the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    graph.addVertex(A)
    expect(graph.adjacencyList.size).toBe(1)
  })

  test("An edge can be successfully added to the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    let B = new Vertex("B")
    graph.addVertex(A)
    graph.addVertex(B)
    graph.addDirectedEdge(A, B)
    expect(graph.adjacencyList.get(A)).toMatchObject([
      { vertex: { value: "B" }, weight: 0 },
    ])
  })

  test("A collection of all nodes can be properly retrieved from the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    let B = new Vertex("B")

    graph.addVertex(A)
    graph.addVertex(B)

    expect(graph.getNodes()).toMatchObject([{ value: "A" }, { value: "B" }])
  })

  test("All appropriate neighbors can be retrieved from the graph, weight included", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    let B = new Vertex("B")

    graph.addVertex(A)
    graph.addVertex(B)
    graph.addDirectedEdge(A, B)

    expect(graph.getNeighbors(A)).toMatchObject([
      { vertex: { value: "B" }, weight: 0 },
    ])
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

  test("A graph with only one node and edge can be properly returned", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    graph.addVertex(A)
    graph.addDirectedEdge(A)
    expect(graph.adjacencyList.size).toBe(1)
  })

  test("An empty graph properly returns null", () => {
    let graph = new Graph()
    expect(graph.getNodes()).toBe(null)
  })
})
