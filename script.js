// var a
// a=10
// let a=10
// a=20
// const a=10
// a=20
// let,const
// datatypes
// let a="hai"
// let a=true
// let a
// let a=null
// let a=[1,2,3]
// let a=12345678901234567890

// operators
// let a=10
// let b=20

// let a=20
// let b=10

// let a=20
// let b=10

// let a=30
// a++

// let a=20
// a--


// assignment
// let b=20
// b+=10
// b-=10
// b/=2
// b%=5
// b*=2


// comparison
// let a=20
// let b="10"


// logical

let a=20
let b="10"

alert(!a==b)
 

function largest(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)
    if(a>b && a>c){
        document.getElementById("h1").innerHTML=a 
    }
    else if(b>a && b>c){
        document.getElementById("h1").innerHTML=b
    }
    else{
        document.getElementById("h1").innerHTML=c
    }
    
}


function salary(){
    e=parseInt(document.getElementById("expr").value)
    y=parseInt(document.getElementById("salry").value)
    if(y>5){
        document.getElementById("h1").innerHTML=(y*0.05)+y
    }
    else{
        document.getElementById("h1").innerHTML=y
    }
}


function unit(){
    u=parseInt(document.getElementById("units").value)
    if(u==100){
        document.getElementById("h1").innerHTML=0
    }
    else if(u<=200){
        document.getElementById("h1").innerHTML=(u-100)*5
    }
    else{
        document.getElementById("h1").innerHTML=(u-200)*10
    }
}