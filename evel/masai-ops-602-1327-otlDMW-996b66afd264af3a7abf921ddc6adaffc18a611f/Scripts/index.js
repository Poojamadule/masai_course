// Write code related to Home page here
let nameEl=document.getElementById("name");
let typeEl= document.getElementById("type");
let categoryEl= document.getElementById("category");
let priceEl= document.getElementById("price");
let desEl= document.getElementsById("desc");
let array=JSON.parse(localStorage.getItem("memo"));
if(array==null){
    array=[];
}

let taskform = document.querySelector("form");
taskform.addEventListener("create",(e)=>{
    e.preventDefault();
    let formdata={
        name:nameEl.value ,
        desc :desEl.value ,
        type:typeEl.value ,
        category :categoryEl.value ,
        price: priceEl.value ,

    }
    array.push(formdata);
    localStorage.setItem("memo",JSON.stringify(array));
    
    
});




