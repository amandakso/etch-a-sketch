const container=document.querySelector(".container");
const button=document.querySelector(".button");

function generateSquares() {
    for (i=0; i<(16 * 16); i++){
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        
    }
};
generateSquares();


const squares=document.querySelectorAll("div.square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.background=`rgb(${255},${204},${229})`;
    });
});
button.addEventListener("click", () => {
    const grid=document.getElementById("grid");
    while(grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    };
    promptQuestion();

});
//prompt question is not retaining num
function promptQuestion() {
    let num=window.prompt("How many squares per side?");
    while (Number.isSafeInteger(parseFloat(num))==false|| parseFloat(num)<1 || parseFloat(num)>100)
    if (Number.isSafeInteger(parseFloat(num))==true && parseFloat(num)>=1 && parseFloat(num)<= 100) {
        console.log
    } else {
        num=window.prompt("Invalid answer. How many squares per side? Pick number between 1 & 100");
    };
};

/*
button.addEventListener("click", () => {
    let num=window.prompt("How many squares per side?");
    while (Number.isSafeInteger(parseFloat(num))==false|| parseFloat(num)<1 || parseFloat(num)>100)
    if (Number.isSafeInteger(parseFloat(num))==true && parseFloat(num)>=1 && parseFloat(num)<= 100) {
        console.log(num);
    } else {
        num=window.prompt("Invalid answer. How many squares per side? Pick number between 1 & 100");
    };
});
*/

function resetSquares(val) {
    let col=100/parseFloat(val);
    let change=document.getElementById(".container");
    change.style.gridTemplateColumns=`repeat(parseFloat(${val}),${col}%)`;
    change.style.gridTemplateRows=`repeat(parseFloat(${val}),${col}%)`;
    for(i=0; i<(val * val); i++) {
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    };
};