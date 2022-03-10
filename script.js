const container=document.querySelector(".container");
const button=document.querySelector(".button");
const startover=document.querySelector(".startover");
const black=document.querySelector(".black");
const blue=document.querySelector(".blue");
const pastel=document.querySelector(".pastel");
const rainbow=document.querySelector(".rainbow");
const gray=document.querySelector(".gray");
const eraser=document.querySelector(".eraser");
let paint="black";
function generateSquares(num) {
    let x=parseFloat(num);
    for (i=0; i<(x * x); i++){
        const square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);  
        };
        paintSquare();
    };

generateSquares(16);




function paintSquare() {
    const squares=Array.from(document.querySelectorAll(".square"));
    squares.forEach((square)=> square.addEventListener("mouseover", () => {
        square.style.background= paint;
    }));
};

function removeListener() {
    const squares=Array.from(document.querySelectorAll(".square"));
    squares.forEach((square)=> square.removeEventListener("mouseover", () => {
        square.style.background= paint;
    }));
};

black.addEventListener("click", () => {
    removeListener();
    paint= "black";
    paintSquare();
});

blue.addEventListener("click", () => {
    removeListener();
    paint="blue";
    paintSquare();
});

eraser.addEventListener("click", () => {
    removeListener();
    paint="white";
    paintSquare();
})



startover.addEventListener("click", () => {
    const grid=document.getElementById("grid");
    while(grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    };
    promptQuestion();

});

function promptQuestion() {
    do {
        num=window.prompt("How many squares per side? (1-100 squares allowed)");
    }while (Number.isSafeInteger(parseFloat(num))==false|| parseFloat(num)<1 || parseFloat(num)>100)
   let val=parseFloat(num);
    resetSquares(val);
    generateSquares(val);
};

function resetSquares(num) {
    let val=parseFloat(num);
    let col=480/val;
    let change=document.getElementById("grid");
    change.style.gridTemplateColumns=`repeat(${val}, ${col}px)`;
    change.style.gridTemplateRows=`repeat(${val}, ${col}px)`;
};