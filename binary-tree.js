class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }
  
  isEmpty(){
    return this.root === null
  }
  
  insert(value){
    const newNode = new Node(value)
    
    if(this.isEmpty()){
      this.root = newNode
    } else{
      this.insertNode(this.root, newNode)
    }
  }
  
  insertNode(root, newNode){
    if(newNode.value < root.value){
      if(root.left === null){
        root.left = newNode
      } else{
        this.insertNode(root.left, newNode)
      }
    } else{
      if(root.right === null){
        root.right = newNode
      } else{
        this.insertNode(root.right, newNode)
      }
    }
  }
  
  search(root, value){
    if(!root) return false
    else{
      if(root.value === value) return true
      else if(value < root.value){
        return this.search(root.left, value)
      } else{
        return this.search(root.right, value)
      }
    }
  }
  // DFs (Root → Left → Right)
  preOrder(root){
    if(root){
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  // Left → Root → Right)
  inderOrder(root){
    if(root){
      this.inderOrder(root.left)
      console.log(root.value)
      this.inderOrder(root.right)
    }
  }

  // Left → Right → Root)
  postOrder(root){
      if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }
  // BFS
  levelOrder(){
    const queue = []
    
    queue.push(this.root)
    
    while(queue.length){
      let curr = queue.shift()
      console.log(curr.value)
      if(curr.left){
        queue.push(curr.left)
      }if(curr.right){
        queue.push(curr.right)
      }
    }
  }
  
  min(root){
    if(!root.left){
      return root.value
    } else{
      return this.min(root.left)
    }
  }
  
  max(root){
    if(!root.right){
      return root.value
    } else{
      return this.min(root.right)
    }
  }
}
