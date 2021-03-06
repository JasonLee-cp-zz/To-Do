const body = document.querySelector("body");


function getRandomNum(x,y){
    return Math.floor(Math.random()*(y-x+1))+x;
}
function paintImage(imgNum){
    const image = new Image();
    image.src = `./img/${imgNum}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    const imgNum = getRandomNum(1,5);
    paintImage(imgNum);
   
}

init();
