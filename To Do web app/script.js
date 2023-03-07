
document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newTask input ').value.length ==0){
        alert("Enter Your task!")
    }else{
        document.querySelector('#taskList').innerHTML +=
        `<div class="task"><span id="taskName">${document.querySelector("#newTask input").value}</span><button class="delete">X</button></div>`;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i< current_tasks.length;i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                
            }
        }
    }
}

