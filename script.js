const container=document.querySelector(".container");
const button=document.querySelector(".button");

function generateSquares(num) {
    let x=parseFloat(num);
    for (i=0; i<(x * x); i++){
        const square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);  
        square.addEventListener("mouseover", () => {
            let a= getRandomArbitrary(0,255);
            let b= getRandomArbitrary(0,255);
            let c= getRandomArbitrary(0,255);
        square.style.background=`rgb(${a},${b},${c})`;
        });
    }
};
generateSquares(16);

 function getRandomArbitrary(min, max) {
     return Math.random() *(max-min) + min;
 };


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
    resetSquares(val);
    generateSquares(val);
};

function resetSquares(num) {
    let val=parseFloat(num);
    let col=720/val;
    let change=document.getElementById("grid");
    change.style.gridTemplateColumns=`repeat(${val}, ${col}px)`;
    change.style.gridTemplateRows=`repeat(${val}, ${col}px)`;
};