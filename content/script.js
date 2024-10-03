function demo(){
    let a='welcome'
    console.log(a);
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    div.innerHTML=`<h2 style="color:blue">hai ${a}</h2>`

    //const h2=document.createElement('h2')
    //h2.textContent=a
    //div.appendChild(h2)
    main.appendChild(div)
}
demo()