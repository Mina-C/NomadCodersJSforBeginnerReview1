const dateContainer = document.querySelector(".js-date"),
    timeContainer = document.querySelector(".js-time"),
    dateTitle = dateContainer.querySelector("h1"),
    timeTitle = timeContainer.querySelector("h1");

function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const dateOfMonth = date.getDate();
    const day = date.getDay();
    const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayOfWeek = dayArr[`${day}`];
    dateTitle.innerText = `${year}-${month<10? `0${month}`:`${month}`}-${dateOfMonth<10? `0${dateOfMonth}`: `${dateOfMonth}`} ${dayOfWeek}`
}

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    timeTitle.innerText = `${hour}:${minute<10? `0${minute}`:`${minute}`}`; /* :${second<10? `0${second}`:`${second}`} */
}

function init(){
    setInterval(getDate,1000);
    setInterval(getTime,1000);
}
init();