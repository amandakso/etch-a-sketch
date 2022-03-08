const container=document.querySelector(".container");
const button=document.querySelector(".button");
const startover=document.querySelector(".startover");


function generateSquares(num) {
    let x=parseFloat(num);
    for (i=0; i<(x * x); i++){
        const square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);  
        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor='black';
            let opacity= Number(event.target.style.opacity);
            if (opacity< 1) {
                opacity=opacity + 0.1;
            }
            event.target.style.opacity= opacity;
        });
        };
    };

generateSquares(16);

function pickColor() {
    
}

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