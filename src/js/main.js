let buttonCountClick;
let buttonCountHtml = document.querySelector(".btn-count");
let buttonLocalStorageCount;

if(!localStorage.getItem("count")){
    buttonCountClick = 0;
} else {
    buttonCountClick = localStorage.getItem("count");
}

const openModal = () => {
   document.body.classList += " open-modal";
   buttonCountClick++;
   localStorage.setItem("count",buttonCountClick); 
   displayButtonCount();
}

const closeModal = () => {
    document.body.classList.remove("open-modal");
}

const displayButtonCount = () =>{
    let buttonReset = document.querySelector(".btn-reset");
    buttonCountHtml.textContent = localStorage.getItem("count");
    buttonLocalStorageCount = localStorage.getItem("count");
    if(parseInt(buttonLocalStorageCount) >= 5){
        buttonReset.classList += " visible";
    } else {
        buttonReset.classList.remove("visible");
    }
}

const resetCout = () => {
    buttonCountClick = 0;
    buttonLocalStorageCount = 0;
    buttonCountHtml.textContent = 0;
    localStorage.setItem("count",0); 
}