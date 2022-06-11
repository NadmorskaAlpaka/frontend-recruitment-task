let buttonCountClick;
let buttonLocalStorageCount;
let buttonCountHtml = document.querySelector(".btn-count");
let modalHtml = document.querySelector(".modal");
let backgroundModalHtml = document.querySelector(".modal--background");

if(!localStorage.getItem("count")){
    buttonCountClick = 0;
} else {
    buttonCountClick = localStorage.getItem("count");
};

const openModal = () => {
   modalHtml.classList += " open-modal";
   backgroundModalHtml.classList += " modal--background-visible";
   buttonCountClick++;
   localStorage.setItem("count",buttonCountClick); 
   displayButtonCount();
};

window.addEventListener('mouseup', function(event){
    if(event.target != modalHtml && event.target.parentNode != modalHtml){
        modalHtml.classList.remove("open-modal");
        backgroundModalHtml.classList.remove("modal--background-visible");
    }
})

const closeModal = () => {
    modalHtml.classList.remove("open-modal");
    backgroundModalHtml.classList.remove("modal--background-visible");
};

const displayButtonCount = () =>{
    let buttonReset = document.querySelector(".btn-reset");
    buttonCountHtml.textContent = localStorage.getItem("count");
    buttonLocalStorageCount = localStorage.getItem("count");
    if(parseInt(buttonLocalStorageCount) >= 5){
        buttonReset.classList += " visible";
    } else {
        buttonReset.classList.remove("visible");
    }
};

const resetCout = () => {
    buttonCountClick = 0;
    buttonLocalStorageCount = 0;
    buttonCountHtml.textContent = 0;
    localStorage.setItem("count",0); 
};
