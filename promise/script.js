// mypro=new Promise(function(res,rej){
// if (10==11){
//     res('hello')
// }else{
//     rej('hai')
// }
// })
// mypro.then(function(value){
//     console.log(value);

// }).cathh(function(error){
//     console.log(error);
// });




const main = async(url)=>{
    try{
        const response= await fetch(url)
        const data=await response.json()
        return[data,null]
    }catch(error){
        return[null,error]
    }
}

const fetchdata=async()=>{
    const[response,error]=await main('https://dummyjson.com/products')
    if(response){
        console.log(response)
    }
    else{
        console.log('error')
    }
}
fetchdata()