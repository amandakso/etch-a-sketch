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
    do {
        num=window.prompt("How many squares per side? (1-100 squares allowed)");
    }while (Number.isSafeInteger(parseFloat(num))==false|| parseFloat(num)<1 || parseFloat(num)>100)
   let val=parseFloat(num);
    console.log(val);
    resetSquares(val);
};


function resetSquares(val) {
    let col=720/val;
    let change=document.getElementById("grid");
    change.style.gridTemplateColumns=`repeat(${val}, ${col}px)`;
    change.style.gridTemplateRows=`repeat(${val}, ${col}px)`;
    for(i=0; i<(val * val); i++) {
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    };
};