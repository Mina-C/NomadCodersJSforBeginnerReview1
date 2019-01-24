const greeting = document.querySelector(".js-greeting"),
    form = document.querySelector(".js-form"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove("SHOWING_CN");
    greeting.innerHTML = `Welcome, ${text}!`;
}

function loadName () {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();
