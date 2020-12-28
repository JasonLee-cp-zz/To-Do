const quoteDiv = document.querySelector(".quote-div");
const quoteElement = document.querySelector(".quote-element");

let quotes = {
    1: "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    2:  "That which does not kill us makes us stronger. -– Friedrich Nietzsche",
    3: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. -– Bernard M. Baruch",
    4: "We must not allow other people’s limited perceptions to define us. -Virginia Satir",
    5: "Do what you can, with what you have, where you are. -Theodore Roosevelt"
};

function getRandomNum(x,y){
    return Math.floor(Math.random()*(y-x+1))+x;
}

function paintQuote(quoteNum){
    quoteElement.innerText = quotes[quoteNum];
}

function init(){
    const quoteNum = getRandomNum(1,5);
    paintQuote(quoteNum);
}

init();


