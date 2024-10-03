// function demo(){
//     let a='welcome'
//     console.log(a);
//     const main=document.querySelector('.main')
//     const div=document.createElement('div')
//     let count=60
// let c=setInterval(function(){
//     div.innerHTML=`<h2 style="color:blue">00:${count}</h2>`
//     // console.log(count);
//     count--
//     if(count==0){
//         clearInterval(c)
//         console.log('Finished');
//     div.innerHTML=`<h2 style="color:blue">finished</h2>`

//     }
// },1000)

    
//     main.appendChild(div)
// }
// demo()

function demo() {
    let a = 'welcome';
    console.log(a);
    const main = document.querySelector('.main');
    const div = document.createElement('div');
    
    let count = 240; 
    
    let c = setInterval(function() {
        let minutes = Math.floor(count / 60);
        let seconds = count % 60;

        let formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        div.innerHTML = `<h2 style="color:blue">${formattedTime}</h2>`;
        
        count--; 

        if (count < 0) { 
            clearInterval(c);
            console.log('Finished');
            div.innerHTML = `<h2 style="color:blue">finished</h2>`;
        }
    }, 1000);
    
    main.appendChild(div);
}

demo();


