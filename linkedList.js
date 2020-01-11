
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    insertFirst(data){
            this.head = new Node(data, this.head);
    }
    size(){
        let head = this.head;
        let count = 0;
        while(head){
            count++;
            head = head.next
        }
        return count;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head){
            return null;
        }
        // Solution 1
        let lastnode = this.head;
        while(lastnode.next){
            lastnode = lastnode.next;
        }
        return lastnode;


        //solution2 

        // let node = this.head;
        // while (node) {
        //   if (!node.next) {
        //     return node;
        //   }
        //   node = node.next;
        // }
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    removeLast(){
        if (!this.head) {
            return;
          }
        if(!this.head.next){
            this.head = null;
        }
        //Solution 1

        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;

        // Solution 2

        // let node = this.head.next;
        // while(node.next){
        //     if(!node.next.next){
        //         node.next = null
        //         return;
        //     }
        //     node = node.next;
        // }
    }
    insertLast(data){
        let node = this.getLast();
        if(node){
            node.next = new Node(data, null);
        } else {
            this.head = new Node(data, null);
        }
        
    }
    getAt(index){
        //solution1: 
        let node = this.head;
        let counter = index;
        while(counter){
            if(node){
                node = node.next;
            } else{
                return node
            }
            counter--;
        } 
        return node;

        //solution2 
    //     let counter = 0;
    // let node = this.head;
    // while (node) {
    //   if (counter === index) {
    //     return node;
    //   }

    //   counter++;
    //   node = node.next;
    // }
    // return null;
    }
    removeAt(index){
        if (!this.head) {
            return;
          }
      
          if (index === 0) {
            this.head = this.head.next;
            return;
          }
        let previousNode = this.getAt(index-1);
        if (!previous || !previous.next) {
            return;
          }
          previous.next = previous.next.next;
    }
    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data, null);
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
          }
        let node = this.getAt(index -1) || this.getLast();
        node.next = new Node(data, node.next);

    }
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }
}
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('b2');
list.insertFirst('b2');
console.log(JSON.stringify(list))
list.removeLast()
list.insertLast('er')
console.log(JSON.stringify(list))
list.insertAt('ddddd',1)
console.log(JSON.stringify(list)); 