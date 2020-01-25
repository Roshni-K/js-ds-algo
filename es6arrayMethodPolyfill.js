

//filter method
let myarray = [];
myarray.filter = function filterfunction(func){
    let output = []
for(let i=0; i< myarray.length; i++){
if(func(i)){
    output.push(func(i));
}
}
return output;
}

//map method 
let myarray = [];
myarray.map = function mapfunction(func){
let output = [];
for(let i=0; i< myarray.length; i++){
    output[i] = func(i);
}
return output;
}

//forEach method
let myarray = [];
myarray.forEach = function forEachFunction(func){
for(let i=0; i<myarray.length; i++){
    func(i)
}
}
 //reduce method
 let myarray = [];
 myarray.reduce = (reducerfun, acc) => {
     let output = acc;
     for(let i=0; i< myarray.length; i++){
         output = reducerfun(output, i);
     }
     return output
 }

 