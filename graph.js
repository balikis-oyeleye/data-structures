class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set()
    }
  }
  
  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }
    
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }
    
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }
  
  hasEdge(vertex1, vertex2){
    return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
  }
  
  deleteEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }
  
  deleteVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return
    }
    
    for(let adjacencyList of this.adjacencyList[vertex]){
      this.deleteEdge(vertex, adjacencyList)
    }
    
    delete this.adjacencyList[vertex]
  }
}
