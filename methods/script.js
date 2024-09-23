l=[1,2,3,4]
// console.log(typeof l);
// console.log(l[0]);
// console.log(l[3])
// console.log(l.length)
// a=l.toString()
// console.log(typeof a);
// l.pop()
// console.log(l);
// l.push(10)
// console.log(l);



// l[10]=100
// console.log(l);
// console.log(l.length);
// l.shift()
// console.log(l);
// l.unshift(101)
// console.log(l[0]);
// delete i[0]
// console.log(l);



for(let i in l){
    console.log(l[i]);

}

for(let i of l){
    console.log(i);
    
    if(i==5){
        break
    }
}