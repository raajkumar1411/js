var btn=document.getElementById("btn");
var task=document.getElementById("task");
var p=document.getElementById("p");
var post=document.getElementById("post");

btn.addEventListener("click",(e)=>{
  e.preventDefault()
  addTask();
  
})

let addTask=()=>{
    if(task.value===""){
p.textContent="please add the task";
p.style.color="red";
    }
    else{
        p.textContent="";
        acceptData();
        
    }

}

let data=[]
let acceptData=()=>{
    data.push({text:task.value});
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)
    displayData()
}

let displayData=()=>{
    post.innerHTML="";
    data.map((x,y)=>{
        return(

            post.innerHTML +=` <div id=${y} class="list"><p>${x.text}
            </p>
            <span class="option">
            
            <i  onclick="editPost(this)"class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
            </div>`
        )
    })
task.value=""
}


let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem("data",JSON.stringify(data));

}

let editPost=(e)=>{
    task.value=e.parentElement.previousElementSibling.innerHTML;
    // e.parentElement.parentElement.remove()
    deletePost(e);
}

(()=>{
    data=JSON.parse(localStorage.getItem("data")) ||[];
    displayData()
})();