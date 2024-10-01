// d = [
//     {id:1,name: 'anu', age: 20, Email: 'abc@gmail.com',course:'bba',date:'09/25/2003'},
//     {id:2,name: 'sanu', age: 30, Email: 'al@gmail.com',course:'mba',date:'09/25/2003'},
//     {id:3,name: 'manu', age: 40, Email: 'ponnu@gmail.com',course:'bca',date:'09/25/2003'}
// ]


// function display(){
//     const t_var=document.querySelector('.tbl tbody')
//     t_var.innerHTML=''
//     d.forEach(element => {
//         const t_row=document.createElement('tr')

//         const t_id=document.createElement('td')
//         t_id.textContent=element.id
//         t_row.appendChild(t_id)


//         const t_name=document.createElement('td')
//         t_name.textContent=element.name
//         t_row.appendChild(t_name)


//         const t_age=document.createElement('td')
//         t_age.textContent=element.age
//         t_row.appendChild(t_age)


//         const t_email=document.createElement('td')
//         t_email.textContent=element.Email
//         t_row.appendChild(t_email)
        

//         const t_course=document.createElement('td')
//         t_course.textContent=element.course
//         t_row.appendChild(t_course)

//         const t_date=document.createElement('td')
//         t_date.textContent=element.date
//         t_row.appendChild(t_date)

//         const edit_td=document.createElement("td")
//         const edit_btn=document.createElement("button")
//         edit_btn.textContent="Edit"
//         edit_btn.onclick=function () {
//             edit_form(element.id)
//         }
//         edit_td.appendChild(edit_btn)
//         t_row.appendChild(edit_td)

//         const del_td=document.createElement('td')
//         const del_btn=document.createElement('button')
//         del_btn.textContent='delete'
//         del_btn.onclick=function(){
//             delete_data(element.name)
//         }
//         del_td.appendChild(del_btn)
//         t_row.appendChild(del_td)

//         t_var.appendChild(t_row)
    
//     });

// }

// document.getElementById('submit_form').addEventListener('submit',function(event){
//     event.preventDefault()
//     const id=parseInt(document.getElementById('id').value)
//     const name=document.getElementById('name').value
//     const age=parseInt(document.getElementById('age').value)
//     const Email=document.getElementById('Email').value
//     const course=document.getElementById('course').value
//     const date=document.getElementById('date').value
//     d.push({id:id,name:name,age:age,Email:Email,course:course,date:date})
//     document.getElementById('id').value=''
//     document.getElementById('name').value=''
//     document.getElementById('age').value=''
//     document.getElementById('Email').value=''
//     document.getElementById('course').value=''
//     document.getElementById('date').value=''


//     display()
// })

// let edit_id=""
// function edit_form(id) {
//     // console.log("editing",id);
//     document.getElementById("edit_form").style.display="grid"
//     document.getElementById("submit_form").style.display="none"
//     const edit_details=d.find(user=>user.id==id)
//     document.getElementById("ed_id").value=edit_details.id
//     document.getElementById("ed_name").value=edit_details.name
//     document.getElementById("ed_age").value=edit_details.age
//     document.getElementById("ed_Email").value=edit_details.Email
//     document.getElementById("ed_course").value=edit_details.course
//     document.getElementById("ed_date").value=edit_details.date
//     edit_id=id
    
// }
// document.getElementById("edit_form").addEventListener("submit",function (event) {
//     event.preventDefault()
//     const ed_id=document.getElementById("ed_id").value
//     const ed_name=document.getElementById("ed_name").value
//     const ed_age=document.getElementById("ed_age").value
//     const ed_Email=document.getElementById("ed_Email").value
//     const ed_course=document.getElementById("ed_course").value
//     const ed_date=document.getElementById("ed_date").value
//     // console.log(e_name,e_age,e_place);
//     data=d.map(user=>{
//         if(user.id==edit_id){
//             return {...user,id:ed_id,name:ed_name,age:ed_age,email:ed_Email,course:ed_course,date:ed_date}
//         }
//         return user
//     })

//     document.getElementById("edit_form").style.display="none"
//     document.getElementById("submit_form").style.display="grid"
//     display()

// })

// function delete_data(name){
//     d=d.filter(user=>{
//         if(user.name!=name){
//             return user
//         }
//     })
//     display()
// }

// display()
        
data=[{id:"1",name:"aiswarya",age:21,email:"aiswarya@gmail.com",course:"python",date:"25/09/2003"},{id:"2",name:"alan",age:21,email:"alan@gmail.com",course:"flutter",date:"23/02/2003"},{id:"3",name:"ponnu",age:20,email:"ponnu@gmail.com",course:"data science",date:"25/09/2003"},{id:"4",name:"manu",age:21,email:"manu@gmail.com",course:"python",date:"23/02/2003"}]

function display() {
    const t_var=document.querySelector("#tab tbody")
    t_var.innerHTML=""
    data.forEach(element => {
        const t_row=document.createElement("tr")

        const t_id=document.createElement("td")
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        
        const t_name=document.createElement("td")
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        
        const t_age=document.createElement("td")
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        
        const t_email=document.createElement("td")
        t_email.textContent=element.email
        t_row.appendChild(t_email)

        
        const t_course=document.createElement("td")
        t_course.textContent=element.course
        t_row.appendChild(t_course)

        
        const t_date=document.createElement("td")
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        // edit td

        const edit_td=document.createElement("td")
        const edit_btn=document.createElement("button")
        edit_btn.textContent="Edit"
        edit_btn.onclick=function(){
            edit_form(element.id)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        
        // delete
        const  del_td=document.createElement("td")
        const  del_btn=document.createElement("button")
        del_btn.textContent="delete"
        del_btn.onclick=function() {
            delete_data(element.id)
            
        }

        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        
        t_var.appendChild(t_row)
        
    });
    
}


document.getElementById("norm_form").addEventListener("submit",function(event){
    event.preventDefault() // to remove refresh
    const id=document.getElementById("id").value
    const name=document.getElementById("name").value
    const age=parseInt(document.getElementById("age").value)
    const email=document.getElementById("email").value
    const course=document.getElementById("course").value
    const date=document.getElementById("date").value
    data.push({id:id,name:name,age:age,email:email,course:course,date:date})
    document.getElementById("id").value=""
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("email").value=""
    document.getElementById("course").value=""
    document.getElementById("date").value=""

    display()
})


let edit_id=""
function edit_form(id) {
    console.log("editing",id);
    document.getElementById("edit_form").style.display="grid"
    document.getElementById("norm_form").style.display="none"
    const edit_details=data.find(user=>user.id==id)
    document.getElementById("e_id").value=edit_details.id
    document.getElementById("e_name").value=edit_details.name
    document.getElementById("e_age").value=edit_details.age
    document.getElementById("e_email").value=edit_details.email
    document.getElementById("e_course").value=edit_details.course
    document.getElementById("e_date").value=edit_details.date
    edit_id=id
    
    
}


document.getElementById("edit_form").addEventListener("submit",function (event) {
    event.preventDefault()
    const e_id=document.getElementById("e_id").value
    const e_name=document.getElementById("e_name").value
    const e_age=document.getElementById("e_age").value
    const e_email=document.getElementById("e_email").value
    const e_course=document.getElementById("e_course").value
    const e_date=document.getElementById("e_date").value
    // console.log(e_name,e_age,e_place);
    data=data.map(user=>{
        if(user.id==edit_id){
            return {...user,id:e_id,name:e_name,age:e_age,email:e_email,course:e_course,date:e_date}
        }
        return user
    })

    document.getElementById("edit_form").style.display="none"
    document.getElementById("norm_form").style.display="grid"
    display()

})

function delete_data(id) {
    data=data.filter(user=>{
        if(user.id!=id){
            return user
        }
    })

    display()

}  
display()
        
