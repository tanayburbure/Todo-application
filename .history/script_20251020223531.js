let ctr = 0;
function callback(){
    // document.querySelectorAll("h4")[1].innerHTML = ctr;
    const el = document.querySelectorAll("h4")[1];
    el.innerHTML = ctr;
    ctr = ctr + 1;
}
setInterval(callback,1000) 

function deleterandomtodo(){
    const element = document.querySelector("h4");
    const parentelement = element.parentElement;
    parentelement.removeChild()
}