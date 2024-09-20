function num(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    for (i=a;i<=b;i++){
        // console.log (i);
        // alert(i)
        // document.getElementById('h1').innerHTML=i
        document.write(i)
    }
}

function sum(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    sum=0
    for (i=a;i<=b;i++){
        sum+=i

        // console.log (i);
        // alert(i)
        // document.getElementById('h1').innerHTML=i
        // document.write(i)
    }
    document.getElementById("h1").innerHTML=sum

}

function odd(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    for (i=a;i<=b;i++){
    
        if (i%2==1)
    
    document.write(i)

    }
}

function whilee(){
    i=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    do{
    
        console.log(i);
    
        i++

    }
    while (i<=b)
}

function factor(){
    i=1
    a=parseInt(document.getElementById("sno").value)
    factorial=1
    do{
        factorial*=i
        
        console.log(i);
        i+=1
        

    }
while (i<=a)
    
}