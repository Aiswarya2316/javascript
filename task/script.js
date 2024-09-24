d=[{name:'anu',age:21,place:'vkm'},{name:'anu',age:31,place:'vkm'},{name:'anu',age:41,place:'vkm'},
{name:'anu',age:51,place:'vkm'},{name:'anu',age:61,place:'vkm'}]

above=[ ]
below=[ ]

for(let i of d){
    if(i.age>=40){
    above.push(i);
}
else{
    below.push(i)
}
}

console.log(above);
console.log(below);




