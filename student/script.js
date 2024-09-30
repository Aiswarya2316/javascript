let d = [
    {id:1,name: 'anu', age: 20, Email: 'abc@gmail.com',course:'bba',date:'09/25/2003'},
    {id:2,name: 'sanu', age: 30, Email: 'al@gmail.com',course:'mba',date:'09/25/2003'},
    {id:3,name: 'manu', age: 40, Email: 'ponnu@gmail.com',course:'bca',date:'09/25/2003'}
]


function display(){
    const t_var=document.querySelector('.tbl tbody')
    t_var.innerHTML=''
    d.forEach(element => {
        const t_row=document.createElement('tr')

        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)


        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)


        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)


        const t_email=document.createElement('td')
        t_email.textContent=element.Email
        t_row.appendChild(t_email)
        

        const t_course=document.createElement('td')
        t_course.textContent=element.course
        t_row.appendChild(t_course)

        const t_date=document.createElement('td')
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        // const del_td=document.createElement('td')
        // const del_btn=document.createElement('button')
        // del_btn.textContent='delete'
        // del_btn.onclick=function(){
        //     delete_data(element.name)
        // }
        // del_td.appendChild(del_btn)
        // t_row.appendChild(del_td)

        t_var.appendChild(t_row)
    
    })

}

document.getElementById('submit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const id=parseInt(document.getElementById('id').value)
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const Email=document.getElementById('Email').value
    const course=document.getElementById('course').value
    const date=document.getElementById('date').value
    d.push({id:id,name:name,age:age,Email:Email,course:course,date:date})
    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('Email').value=''
    document.getElementById('course').value=''
    document.getElementById('date').value=''


    display()
})
// function delete_data(name){
//     d=d.filter(user=>{
//         if(user.name!=name){
//             return user
//         }
//     })
//     display()
// }

display()
        

        
