let buttonCountClick;
let buttonLocalStorageCount;
let usersData;
let buttonCountHtml = document.querySelector(".btn-count");
let modalHtml = document.querySelector(".modal");
let backgroundModalHtml = document.querySelector(".modal--background");
let tableData = document.querySelector(".table-data");
let modalTable = document.querySelector(".modal-table");
let loader = document.querySelector(".loader");

if(!localStorage.getItem("count")){
    buttonCountClick = 0;
} else {
    buttonCountClick = localStorage.getItem("count");
};

const openModal = async () => {
   modalHtml.classList += " open-modal";
   backgroundModalHtml.classList += " modal--background-visible";
   buttonCountClick++;
   localStorage.setItem("count",buttonCountClick); 
   displayButtonCount();
   loader.classList += " visible";
   if(!usersData){
       await getUsers();
    }
   modalTable.classList += " visible";
   loader.classList.remove("visible");
};

window.addEventListener('mouseup', function(event){
    if(event.target != modalHtml && event.target.parentNode != modalHtml){
        modalHtml.classList.remove("open-modal");
        backgroundModalHtml.classList.remove("modal--background-visible");
        modalTable.classList.remove("visible");
    }
})

const closeModal = () => {
    modalHtml.classList.remove("open-modal");
    backgroundModalHtml.classList.remove("modal--background-visible");
    modalTable.classList.remove("visible");
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

const getUsers = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    usersData = await response.json();
    tableData.innerHTML = usersData.map((user) => userHtml(user)).join('');
}

function userHtml(user){
    return `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                ${user.address.city}
                ${user.address.street}
                ${user.address.suite} 
            </td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
        </tr>`
}

