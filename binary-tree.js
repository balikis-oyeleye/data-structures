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
    const queue = [this.root]
    
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
  
  delete(value){
    this.root = this.deleteNode(this.root, value)
  }
  
deleteNode(root, value) {
  if (!root) return root;
  
  if (value < root.value) {
    root.left = this.deleteNode(root.left, value);
  } else if (value > root.value) {
    root.right = this.deleteNode(root.right, value);
  } else {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    
    root.value = this.min(root.right);
    
    root.right = this.deleteNode(root.right, root.value);
  }

  return root;
}

}

//In binary tree when inserting a node the smaller value to the parent is inserted to the left while the bigger id to the right
