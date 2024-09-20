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

function city(){
    c=parseInt(document.getElementById("units").value)

    if (city=="Delhi")
        {
            document.getElementById("h1").innerHTML="redfort"
        }
   
    else if(city=="agra") 
        {
            document.getElementById("h1").innerHTML="Taj Mahal"
        }
            
    else if(city=="jaipur")
        {
            document.getElementById("h1").innerHTML="Jal Mahal"
        }
            
    else {
        document.getElementById("h1").innerHTML="Jal Mahal"
    }
           
}

function day(){
    d=parseInt(document.getElementById("num").value)
    if(d==1){
        document.getElementById("h1").innerHTML='Sunday'
    }
    else if(d==2){
        document.getElementById("h1").innerHTML='Monday'
    }
    else if(d==3){
        document.getElementById("h1").innerHTML='Tuesday'
    }
    else if(d==4){
        document.getElementById("h1").innerHTML='Wednesday'
    }
    else if(d==5){
        document.getElementById("h1").innerHTML='Thursday'
    }
    else if(d==6){
        document.getElementById("h1").innerHTML='Friday'
    }
    else{
        document.getElementById("h1").innerHTML='Saturday'
    }
}



function lastdigit(){
    n=parseInt(document.getElementById("num").value)
    const d=n%10
    if (d%3==0){
        document.getElementById("h1").innerHTML=' divisible by 3'  
    }
    else{
        document.getElementById("h1").innerHTML='not divisible by 3 '
    }
}

function cost(){
    p=parseInt(document.getElementById("price").value)
    if (p>100000){
        document.getElementById("h1").innerHTML=p*0.15  
    }
    else if(p>50000 && p<=100000){
        document.getElementById("h1").innerHTML=p*0.10
    }
    else if(p<=50000){
        document.getElementById("h1").innerHTML=p*0.05
    }
    else{
        document.getElementById("h1").innerHTML='no tax'
    }
}