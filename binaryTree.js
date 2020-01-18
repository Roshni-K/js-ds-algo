// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) {
        this.left.insert(data);
      } else if (data < this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
  
    contains(data) {
      if (this.data === data) {
        return this;
      }
  
      if (this.data < data && this.right) {
        return this.right.contains(data);
      } else if (this.data > data && this.left) {
        return this.left.contains(data);
      }
  
      return null;
    }
  }
let tree = new Node(10); 
tree.insert(7) 
tree.insert(3) 
tree.insert(8) 
tree.insert(14) 
tree.insert(11) 
tree.insert(15) 
// console.log(tree)


function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }
  
    if (min !== null && node.data < min) {
      return false;
    }
  
    if (node.left && !validate(node.left, min, node.data)) {
      return false;
    }
  
    if (node.right && !validate(node.right, node.data, max)) {
      return false;
    }
  
    return true;
  }

  console.log(validate(tree));