const timeDiv = document.querySelector(".current-time");
const timeMsg = timeDiv.querySelector(".time-msg");

function getCurrentTime(){
   let now = new Date();
   const hour = now.getHours();
   const min = now.getMinutes();
   const sec = now.getSeconds();
   timeMsg.innerHTML = `${hour<10 ? '0' + hour:hour}:${min<10 ? '0' + min : min}:${sec < 10 ? '0' + sec:sec} ${hour < 12 ? "AM" : "PM"}`;
    
}

function init(){
    setInterval(getCurrentTime,1000);
}

init();