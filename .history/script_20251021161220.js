let ctr = 0;
function callback(){
    // document.querySelectorAll("h4")[1].innerHTML = ctr;
    const el = document.querySelectorAll("h4")[1];
    el.innerHTML = ctr;
    ctr = ctr + 1;
}
// setInterval(callback,1000) 

function deleterandometodo(){
    const element = document.querySelector("h4");
    const parentelement = element.parentElement;
    parentelement.removeChild(element)
}

function addTodo(){
    const divEL = document.createElement("div");
    divEL.innerHTML = "Hiiiiiiiiiiiii thereeeeeeee";
    const parentEL = document.querySelector("body");
    parentEL.appendChild(divEL);
}