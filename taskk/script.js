let d = [
    {name: 'anu', age: 20, place: 'ekm'},
    {name: 'sanu', age: 30, place: 'ekm'},
    {name: 'manu', age: 40, place: 'ekm'},
    {name: 'au', age: 50, place: 'okm'},
    {name: 'nu', age: 20, place: 'tkm'}
]


function display(){
    const t_var=document.querySelector('.tbl tbody')
    t_var.innerHTML=''
    d.forEach(element => {
        const t_row=document.createElement('tr')

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)


        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)


        const t_place=document.createElement('td')
        t_place.textContent=element.place
        t_row.appendChild(t_place)

        

        // t_var.appendChild(t_row)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'
        del_btn.onclick=function(){
            delete_data(element.name)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        t_var.appendChild(t_row)

    });

}


document.getElementById('submit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const place=document.getElementById('place').value
    d.push({name:name,age:age,place:place})
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''

    display()
})
function delete_data(name){
    d=d.filter(user=>{
        if(user.name!=name){
            return user
        }
    })
    display()
}

display()