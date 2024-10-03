// spread
// l=[1,2,3,4]
// l1=[...l,5,6]
// console.log(l1);


// d={name:'abc',age:24}
// d1={...d,place:'ekm',name:'abcd',age:20}
// console.log(d1);

// structuring

// l=[1,2,3,4]
// const[a,...b]=l
// console.log(a);
// console.log('b=',b);

// d={name:'abc',age:24,place:'ekm'}

// const{name,...d1}=d
// console.log(name);
// console.log(d1);


// calback

// console.log('start');
// function display(callback){
//     console.log('welcome');
//     setTimeout(function(){
//         console.log('inside fun');
//         callback()

//     },3000)
// }

// function display1(){
//     console.log('dis');
// }

// console.log('before');
// display(display1)
// console.log('end');


// function display(){
//     console.log('display');
// }
// const a=setInterval(display,2000)


// let count=10
// let c=setInterval(function(){
//     console.log(count);
//     count--
//     if(count==0){
//         clearInterval(c)
//         console.log('completed');
//     }
// },1000)


function display(){
    console.log('display');
}
const t=setInterval(display,2000)


let time=59
let a=setInterval(function(){
    console.log(count);
    count--
    if(count==0){
        clearInterval(a)
        console.log('completed');
    }
},1000)


