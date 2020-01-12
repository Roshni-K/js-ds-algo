class Node{
    constructor(data){
        this.data = data,
        this.children = []
    }
    add(data){
    this.children.push(new Node(data));
    };
    remove(node){
        this.children = this.children.filter(function filternode(e){
            return e.data != node.data
        })
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    traversBFT(fn){
        let outputarr = [this.root]
        while(outputarr.length){
           const node = outputarr.shift();
            outputarr.push(...node.children);
            fn(node);
        }
    }
    traverseDFT(fn){
        let outputarr = [this.root]
        while(outputarr.length){
            const node = outputarr.shift();
            outputarr.unshift(...node.children);
            fn(node);
        }
    }
}
function treeLevelWidth(rootnode){
let counterArry  = [0];
let outArry = [rootnode, 'done'];
while(outArry.length){
    let node = outArry.shift();
    if(node === 'done' && outArry.length){
        counterArry.push(0);
        outArry.push('done')
    } else if(!outArry.length){
        return counterArry;
    } else {
        counterArry.push(counterArry.pop() + 1)
        outArry.push(...node.children)
    }
}
return counterArry;
}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
// t.root.add('c');
t.root.children[0].add('d');
t.root.add('c');
// let treeData = new Tree(myTree);
t.traversBFT(function(data){
    console.log(data)
})
console.log(treeLevelWidth(t.root))