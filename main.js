const input= document.querySelector(".input1")
const btnAdd=document.querySelector(".add")
const myTodoList =document.querySelector(".my-todo-list")



btnAdd.addEventListener("click",function(e) {
    if(input.value===""){
      return  alert("Enter a new Task")
    }
    const btnCom=document.createElement("button");
    btnCom.innerText="complete";
    btnCom.setAttribute( "class","complete-btn");
    btnCom.addEventListener("click",function (a) {
        if (btnCom.innerText=="complete"){
        btnCom.innerText="Undo";

            todo.style.cssText="text-decoration:line-through"
        }
        else{
        
        btnCom.innerText="complete"
       // todo.style.cssText="text-decoration:none"
        todo.style.textDecoration="none"

        }
    })
    
    const btnDelt=document.createElement("button");
    btnDelt.innerText="delete";
    btnDelt.setAttribute("class","delete-btn");
    btnDelt.addEventListener("click",function(a){
        btnDelt.parentElement.remove();
        
    })
    

    const todo=document.createElement("p");
    todo.innerText=input.value;
    
    const todoContainer = document.createElement("div")
    todoContainer.appendChild(btnCom);
    todoContainer.appendChild(btnDelt);
    todoContainer.appendChild(todo);

    myTodoList.appendChild(todoContainer)
    input.value="";
    




})























// const btn = document.createElement("button") // <button></button>
// btn.innerText ="Complete" // <buton> complete </button>
// btn.setAttribute("class" , "my-complete-btn")
// btn.addEventListener("click" , ()=> alert("complete"))

// const btnD = document.createElement("button") // <button></button>
// btnD.innerText ="Delete" // <buton> complete </button>
// btn.setAttribute("class" , "my-complete-btn")
// btnD.addEventListener("click" , ()=> alert("Delete"))


// const todo = document.createElement("p")
// todo.innerText = input.value

// myTodoList.appendChild(btn)
// myTodoList.appendChild(btnD)
// myTodoList.appendChild(todo)

// input.value = ""