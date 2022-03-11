const container=document.querySelector(".container");
const button=document.querySelector(".button");
const startover=document.querySelector(".startover");
const black=document.querySelector(".black");
const blue=document.querySelector(".blue");
const random=document.querySelector(".random");
const rainbow=document.querySelector(".rainbow");
const gray=document.querySelector(".gray");
const eraser=document.querySelector(".eraser");

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
    squares=container.querySelectorAll(".square");
    squares.forEach((square)=> square.addEventListener("mouseover", () =>{
    square.style.backgroundColor= `rgb(${0},${0},${0})`;
}));
};

black.addEventListener("click", () => {
    paintSquare();
});

blue.addEventListener("click", () => {
    paintBlue();
});

eraser.addEventListener("click", () => {
    paintWhite();
});

random.addEventListener("click", () => {
    paintRandom();
});

rainbow.addEventListener("click", () => {
    paintRainbow();
});

gray.addEventListener("click", () => {
    paintGray();
});

function paintBlue() {
    squares=container.querySelectorAll(".square");
    squares.forEach((square)=> square.addEventListener("mouseover", () => {
    square.style.backgroundColor= "blue";
}));
};

function paintWhite() {
    squares=container.querySelectorAll(".square");
    squares.forEach((square)=> square.addEventListener("mouseover", () => {
    square.style.backgroundColor= "white";
}));
};

function paintRandom() {
    let color= pickRainbowColor();
    squares=container.querySelectorAll(".square");
    squares.forEach((square)=> square.addEventListener("mouseover", () => {
    square.style.backgroundColor= color;
}));
}

function paintRainbow() {
    squares=container.querySelectorAll(".square");
    squares.forEach((square)=> square.addEventListener("mouseover", () => {
    square.style.backgroundColor= pickRainbowColor();
}));
};

function paintGray() {
    squares=container.querySelectorAll(".square");
    squares.forEach((square)=> square.addEventListener("mouseover", () => {
        square.style.backgroundColor="black";
        square.style.opacity=+square.style.opacity+ 0.1;
    console.log(square.style.opacity);
}));
};

startover.addEventListener("click", () => {
    const grid=document.getElementById("grid");
    while(grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    };
    promptQuestion();
});

function getRandomArbitrary(min, max) {
    return Math.random() *(max-min) + min;
};

function pickRainbowColor() {
    let a= getRandomArbitrary(0,255);
    let b= getRandomArbitrary(0,255);
    let c= getRandomArbitrary(0,255);
    return `rgb(${a}, ${b}, ${c})`;
};  

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