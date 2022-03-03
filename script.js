const container=document.querySelector(".container");
const button=document.querySelector(".button");

let numberOfSquares= 0;
function generateSquares() {
    for (numberOfSquares=0; numberOfSquares <(16 * 16); numberOfSquares++){
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        
    }
};
generateSquares();

function resetSquares(val) {
    let numberOfSquares=0;
    let col=100/parseFloat(val);
    let change=document.getElementById(".container");
    change.style.gridTemplateColumns=`repeat(parseFloat(${val}),${col}%)`;
    change.style.gridTemplateRows=`repeat(parseFloat(${val}),${col}%)`;
    for(numberOfSquares=0; numberOfSquares <(val * val); numberOfSquares++) {
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    };
};

const color=document.querySelectorAll("div.square");
color.forEach((square) => {
    square.addEventListener("mouseleave", () => {
        square.style.background=`rgb(${255},${204},${229})`;
    });
});

button.addEventListener("click", () => {
    let num=window.prompt("How many squares per side?");
    while (Number.isSafeInteger(parseFloat(num))==false|| parseFloat(num)<1 || parseFloat(num)>100)
    if (Number.isSafeInteger(parseFloat(num))==true && parseFloat(num)>=1 && parseFloat(num)<= 100) {
    color.container.removeChild(square);
    resetSquares(num);
    } else {
        num=window.prompt("Invalid answer. How many squares per side? Pick number between 1 & 100");
    };
});
