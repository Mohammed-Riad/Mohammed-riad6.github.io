
let form=document.querySelector("form");

let input=document.querySelector("input");

let list =document.querySelector(".List")

let clearbtn=document.querySelector("#clear-btn") 

let taskempty=document.querySelector('.Task-Empty')

let alertbtn=document.getElementById("alert")



//الطريقه الاولى

// form.addEventListener("submit",function(e)
// {
  

//     e.preventDefault();

//     if(input.value  ===  "")
//     {
//         return false

//     }else 
//     {
//         let listItem=document.createElement("li");

//         listItem.classList.add(".list-item")

//         let inputecap=input.value.substr(0,1).toUpperCase() + input.value.substr(1,input.value.length) 

//         listItem.innerHTML=
//         `
//             <span class="task">${inputecap}</span>
//             <span class="del">x</span>
//         `
        
//         list.appendChild(listItem)

//     }


// })


//الطريقه الثانيه)

// on:هي الي بتشغل ال الكود

//اول م تفوت ع صفحه بحطك بلمكان الي انت بتختارو

window.onload=input.focus();

taskEmpaty()

form.onsubmit=newTask;

clearbtn.onclick=clearTask;

function newTask(e)
{
   
    e.preventDefault();

    if(input.value  ===  "")
    {
        alertbtn.innerHTML =`<div class="naval"> Please Insert Value</div>`

        setTimeout(()=>
        {
            let naval=document.querySelector(".naval")

            // naval.forEach( n=> {
            //     n.style.height=1;
            //     n.style.padding=1;
                
            // });
            naval.style.height=1;
            naval.style.padding=1;
            
            naval.remove()
            // setTimeout(()=> n.remove(),1000)

        },1000)

    }else // ADD TASK 
    {
        let listItem=document.createElement("li");

        listItem.classList.add("list-item")

        //في جافا سكربت لا يوجد لدينا كود لجعل الحرف الاول كابتل لهذا خترعنا هذا الكود )(length :"لاخد بقيه الكلمه ")

        let inputecap=input.value.substr(0,1).toUpperCase() + input.value.substr(1,input.value.length) 

        listItem.innerHTML=
        `
            <span class="task">${inputecap}</span>
            <i class="del fa-trash"></i>
        `


        list.appendChild(listItem)


         input.value=""


         input.focus()

         taskEmpaty()

         taskcount(list.children.length)


      //  Delete

        let delbtn=document.querySelectorAll(".del")
    
        delbtn.forEach( function(btn)
        {
            btn.onclick=deleteTask;

         

        
        });


            //done

            let alldone=document.querySelectorAll(".list-item")

            alldone.forEach(edone =>
            {
                edone.children[0].onclick=done

            })


    }
}


function deleteTask(e)
{
    console.log("ok")

    e.target.parentNode.remove()
    taskEmpaty()
    window.onload=input.focus();

 taskcount(list.children.length);
 taskDoneE()


    

}


//طريقه الي انا بعرفها

// clearbtn.addEventListener("click",function()
// {
//     clearTask()


//     function clearTask()
// {
//     list.innerHTML=""
// }
// })

//طريقه جديده

function clearTask()
{
    list.innerHTML=""
    taskEmpaty()
    window.onload=input.focus();
    taskcount(list.children.length);
    taskDoneE()

}

function taskEmpaty()
{
    if(list.children.length === 0)
    {
        taskempty.innerHTML="Task Empty"
    }else 
    {
        taskempty.innerHTML=""
    }
}

function done(e)
{

e.target.classList.toggle("done");
taskDoneE()

}


function taskcount(count)
{
   document.querySelector(".c-task-count").innerHTML=count
}


function taskDoneE()
{

    let donelength=document.querySelectorAll(".done").length
    document.querySelector(".c-task-done").innerHTML=donelength
}