// let ctr = 0;
// function callback(){
//     document.querySelectorAll("h4")[1].innerHTML = ctr;
//     const el = document.querySelectorAll("h4")[1];
//     el.innerHTML = ctr;
//     ctr = ctr + 1;
// }
// // setInterval(callback,1000) 

// function deleterandometodo(){
//     const element = document.querySelector("h4");
//     const parentelement = element.parentElement;
//     parentelement.removeChild(element)
// }

// function addTodo(){
//     const divEL = document.createElement("div");
//     divEL.innerHTML = "Hiiiiiiiiiiiii thereeeeeeee";
//     const parentEL = document.querySelector("body");
//     parentEL.appendChild(divEL);
// }


// let ctr = 1


// function addtodo(){
    
//     const inputEL = document.querySelector("input")
//     const value = inputEL.value

//     const newDivEL = document.createElement("div")
//     newDivEL.setAttribute("id",ctr)
//     newDivEL.innerHTML = "<div>" + value + '</div><button onclick="deletetodo('+ ctr +')" >delete</button>';
//     document.querySelector("body").appendChild(newDivEL)
//     ctr = ctr + 1 ; 
// }

// function deletetodo(index){
//     const element = document.getElementById(index);
//     element.parentNode.removeChild(element)
// }




// let ctr = 1;

// function addtodo(){
//     const inputEl = document.querySelector("input");
//     const value = inputEl.value;

//     const newDivEl = document.createElement("div")
//     newDivEl.setAttribute("id",ctr)
//     newDivEl.innerHTML = "div" + value + '</div> <button onclick="deletetodo('+ ctr +')"> delete </button>'
//     document.querySelector("body").appendChild(newDivEl)
// }

// function deletetodo(index){
//     const element = document.getElementById(index)
//     element.parentNode.removeChild(element)
// }


// let ctr = 0 ;
//  function addtodo(){
//     const inputEL = document.querySelector("input");
//     const value = inputEL.value;
//     const newDivEL= document.createElement("div");
//     newDivEL.setAttribute("id",ctr);
//     newDivEL.innerHTML = value + ' <button onclick="deletetodo('+ ctr +')" > delete</button>';
//     document.querySelector("body").appendChild(newDivEL);
//  }

//  function deletetodo(index){
//     const element = document.getElementById(index);
//     element.parentNode.removeChild(element);
//  }

function addtodo(){
   const value = document.querySelector("input").value;
   const spanE = document.createElement("span");
   const buttonEl = document.createElement("button");
   SVGTSpanElement.innerHTML = value
}